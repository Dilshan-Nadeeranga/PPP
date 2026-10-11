// Server-side storage for the admin-editable data (shop details + products).
//
// - On your PC (npm run dev / npm start): saved in data/store.json.
// - On Vercel: saved in Upstash Redis. Add the free "Upstash for Redis" integration in the
//   Vercel dashboard; it sets KV_REST_API_URL and KV_REST_API_TOKEN automatically.
//
// Only import this file from server code (server components, server actions).

import { promises as fs } from 'fs'
import path from 'path'
import { unstable_noStore as noStore } from 'next/cache'
import { defaultProducts, type Product } from './products'
import { defaultSettings, toSite, type SiteSettings } from './site'

export type StoreData = {
  settings: SiteSettings
  products: Product[]
}

const REDIS_KEY = 'ppp:store'
const FILE_PATH = path.join(process.cwd(), 'data', 'store.json')

const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
const useRedis = Boolean(redisUrl && redisToken)

export class StorageNotConfiguredError extends Error {
  constructor() {
    super(
      'Saving is not set up on this server yet. In Vercel, add the "Upstash for Redis" integration to this project, then redeploy.',
    )
  }
}

const seed = (): StoreData => ({
  settings: { ...defaultSettings },
  products: defaultProducts.map((p) => ({ ...p })),
})

// Fill in anything missing (e.g. fields added in a later version) from the defaults
function normalise(raw: unknown): StoreData {
  const data = (raw ?? {}) as Partial<StoreData>
  return {
    settings: { ...defaultSettings, ...(data.settings ?? {}) },
    products: Array.isArray(data.products) ? data.products : seed().products,
  }
}

async function redis(command: unknown[]) {
  const res = await fetch(redisUrl!, {
    method: 'POST',
    headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Redis request failed (${res.status})`)
  const json = (await res.json()) as { result?: unknown; error?: string }
  if (json.error) throw new Error(`Redis error: ${json.error}`)
  return json.result
}

export async function getStore(): Promise<StoreData> {
  noStore() // always read the latest saved data

  if (useRedis) {
    const result = await redis(['GET', REDIS_KEY])
    return typeof result === 'string' ? normalise(JSON.parse(result)) : seed()
  }

  try {
    return normalise(JSON.parse(await fs.readFile(FILE_PATH, 'utf8')))
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return seed()
    throw err
  }
}

export async function saveStore(data: StoreData) {
  if (useRedis) {
    await redis(['SET', REDIS_KEY, JSON.stringify(data)])
    return
  }
  // Vercel's file system is read-only, so a file can't be used there
  if (process.env.VERCEL) throw new StorageNotConfiguredError()

  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true })
  const tmp = `${FILE_PATH}.tmp`
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), 'utf8')
  await fs.rename(tmp, FILE_PATH)
}

export async function getSite() {
  return toSite((await getStore()).settings)
}

export async function getVisibleProducts() {
  return (await getStore()).products.filter((p) => !p.hidden)
}

export const storageLabel = useRedis ? 'Upstash Redis' : process.env.VERCEL ? 'Not set up' : 'Local file (data/store.json)'

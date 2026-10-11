'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { checkCredentials } from '@/lib/auth'
import { endSession, requireAdmin, startSession } from '@/lib/session'
import { getStore, saveStore, StorageNotConfiguredError } from '@/lib/store'
import { isCategoryId, type Product } from '@/lib/products'
import type { SiteSettings } from '@/lib/site'

export type FormState = {
  error?: string
  fieldErrors?: Record<string, string>
  ok?: boolean
}

const text = (form: FormData, key: string) => String(form.get(key) ?? '').trim()

function saveError(err: unknown): FormState {
  if (err instanceof StorageNotConfiguredError) return { error: err.message }
  console.error(err)
  return { error: 'Could not save. Please try again.' }
}

// Public pages read the stored data, so refresh them after every change
function refreshSite() {
  revalidatePath('/', 'layout')
}

// ---------- Login ----------

export async function login(_: FormState, form: FormData): Promise<FormState> {
  const email = text(form, 'email')
  const password = String(form.get('password') ?? '')
  const next = text(form, 'next')

  if (!email || !password) return { error: 'Enter your email and password.' }

  if (!(await checkCredentials(email, password))) {
    // Small delay to slow down password guessing
    await new Promise((r) => setTimeout(r, 600))
    return { error: 'Email or password is incorrect.' }
  }

  await startSession()
  // Only allow redirects back into the admin area
  redirect(next.startsWith('/admin') && !next.startsWith('//') ? next : '/admin')
}

export async function logout() {
  endSession()
  redirect('/admin/login')
}

// ---------- Shop details ----------

export async function saveSettings(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin()

  const yearsRaw = text(form, 'yearsInBusiness')
  const settings: SiteSettings = {
    name: text(form, 'name'),
    tagline: text(form, 'tagline'),
    phone: text(form, 'phone'),
    whatsapp: text(form, 'whatsapp'),
    email: text(form, 'email'),
    address: text(form, 'address'),
    openingHours: text(form, 'openingHours'),
    yearsInBusiness: yearsRaw ? Number(yearsRaw) : null,
  }

  const fieldErrors: Record<string, string> = {}
  if (!settings.name) fieldErrors.name = 'Shop name is required.'
  if (settings.phone.replace(/\D/g, '').length < 9) fieldErrors.phone = 'Enter a full phone number, e.g. +94 77 450 9011.'
  if (settings.whatsapp && settings.whatsapp.replace(/\D/g, '').length < 9)
    fieldErrors.whatsapp = 'Enter the number with country code, e.g. +94 77 450 9011.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.email)) fieldErrors.email = 'Enter a valid email address.'
  if (!settings.address) fieldErrors.address = 'Address is required.'
  if (settings.yearsInBusiness !== null && (!Number.isInteger(settings.yearsInBusiness) || settings.yearsInBusiness < 1 || settings.yearsInBusiness > 200))
    fieldErrors.yearsInBusiness = 'Enter a whole number of years, or leave it empty.'
  if (Object.keys(fieldErrors).length) return { fieldErrors, error: 'Please fix the highlighted fields.' }

  try {
    const store = await getStore()
    await saveStore({ ...store, settings })
  } catch (err) {
    return saveError(err)
  }
  refreshSite()
  return { ok: true }
}

// ---------- Products ----------

function slugify(name: string) {
  return (
    name
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || 'product'
  )
}

export async function saveProduct(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin()

  const slug = text(form, 'slug') // empty when adding a new product
  const name = text(form, 'name')
  const description = text(form, 'description')
  const category = text(form, 'category')
  const image = text(form, 'image')
  const hidden = form.get('hidden') === 'on'

  const fieldErrors: Record<string, string> = {}
  if (name.length < 2) fieldErrors.name = 'Enter a product name.'
  if (name.length > 80) fieldErrors.name = 'Keep the name under 80 characters.'
  if (description.length > 200) fieldErrors.description = 'Keep the description under 200 characters.'
  if (!isCategoryId(category)) fieldErrors.category = 'Choose a category.'
  if (image && !/^(\/[^\s]*|https:\/\/[^\s]+)$/.test(image))
    fieldErrors.image = 'Use a path like /products/hinges.jpg or a full https:// link.'
  if (Object.keys(fieldErrors).length || !isCategoryId(category))
    return { fieldErrors, error: 'Please fix the highlighted fields.' }

  try {
    const store = await getStore()
    const product: Product = { slug, name, description, category, ...(image ? { image } : {}), ...(hidden ? { hidden } : {}) }

    if (slug) {
      const index = store.products.findIndex((p) => p.slug === slug)
      if (index === -1) return { error: 'This product no longer exists.' }
      store.products[index] = product
    } else {
      // New product: make a unique slug from the name
      const base = slugify(name)
      let candidate = base
      for (let n = 2; store.products.some((p) => p.slug === candidate); n++) candidate = `${base}-${n}`
      product.slug = candidate
      store.products.push(product)
    }
    await saveStore(store)
  } catch (err) {
    return saveError(err)
  }

  refreshSite()
  redirect(`/admin/products?saved=${encodeURIComponent(name)}`)
}

export async function setProductHidden(form: FormData) {
  await requireAdmin()
  const slug = text(form, 'slug')
  const hidden = form.get('hidden') === 'true'
  const store = await getStore()
  const product = store.products.find((p) => p.slug === slug)
  if (!product) return
  if (hidden) product.hidden = true
  else delete product.hidden
  await saveStore(store)
  refreshSite()
}

export async function deleteProduct(form: FormData) {
  await requireAdmin()
  const slug = text(form, 'slug')
  const store = await getStore()
  store.products = store.products.filter((p) => p.slug !== slug)
  await saveStore(store)
  refreshSite()
}

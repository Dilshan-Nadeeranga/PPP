// Admin login: one hardcoded account and a signed session cookie.
// Uses Web Crypto only, so it also runs in middleware.
//
// IMPORTANT: the repository is on GitHub, so anyone who can see the repo can read these defaults.
// Before going live, set ADMIN_EMAIL and ADMIN_PASSWORD in Vercel → Settings → Environment Variables;
// they override the values below.

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@prasannapp.com'
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'PPP@admin2026'

export const SESSION_COOKIE = 'ppp_admin'
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days, in seconds

// Signing key. Derived from the credentials by default, so changing the password logs everyone out.
const SECRET = process.env.ADMIN_SESSION_SECRET || `ppp-session:${ADMIN_EMAIL}:${ADMIN_PASSWORD}`

const encoder = new TextEncoder()

function toBase64Url(bytes: Uint8Array) {
  let binary = ''
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(s: string) {
  const binary = atob(s.replace(/-/g, '+').replace(/_/g, '/'))
  return Uint8Array.from(binary, (c) => c.charCodeAt(0))
}

async function hmac(data: string) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(data)))
}

// Compare without leaking how many characters matched
function safeEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]
  return diff === 0
}

async function digest(s: string) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(s)))
}

export async function checkCredentials(email: string, password: string) {
  const [e1, e2, p1, p2] = await Promise.all([
    digest(email.trim().toLowerCase()),
    digest(ADMIN_EMAIL.toLowerCase()),
    digest(password),
    digest(ADMIN_PASSWORD),
  ])
  // Evaluate both so timing doesn't reveal which one was wrong
  const emailOk = safeEqual(e1, e2)
  const passwordOk = safeEqual(p1, p2)
  return emailOk && passwordOk
}

export async function createSessionToken() {
  const payload = toBase64Url(encoder.encode(JSON.stringify({ sub: ADMIN_EMAIL, exp: Date.now() + SESSION_MAX_AGE * 1000 })))
  return `${payload}.${toBase64Url(await hmac(payload))}`
}

export async function verifySessionToken(token: string | undefined | null) {
  if (!token) return false
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false
  try {
    if (!safeEqual(fromBase64Url(signature), await hmac(payload))) return false
    const { sub, exp } = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as { sub?: string; exp?: number }
    return sub === ADMIN_EMAIL && typeof exp === 'number' && exp > Date.now()
  } catch {
    return false
  }
}

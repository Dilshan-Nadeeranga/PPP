// Session helpers for server actions and server components (they use next/headers).
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { SESSION_COOKIE, SESSION_MAX_AGE, createSessionToken, verifySessionToken } from './auth'

export async function isLoggedIn() {
  return verifySessionToken(cookies().get(SESSION_COOKIE)?.value)
}

/** Call at the top of every admin server action: middleware doesn't run for every action call. */
export async function requireAdmin() {
  if (!(await isLoggedIn())) redirect('/admin/login')
}

export async function startSession() {
  cookies().set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    // HTTPS-only when served over HTTPS (always on Vercel); plain http on your PC/LAN still works
    secure: process.env.VERCEL === '1' || headers().get('x-forwarded-proto') === 'https',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
}

export function endSession() {
  cookies().delete(SESSION_COOKIE)
}

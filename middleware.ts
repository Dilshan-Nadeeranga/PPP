import { NextResponse, type NextRequest } from 'next/server'
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth'

// Every /admin page needs a valid session, except the login page itself.
export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const loggedIn = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value)

  if (pathname === '/admin/login') {
    return loggedIn ? NextResponse.redirect(new URL('/admin', request.url)) : NextResponse.next()
  }

  if (!loggedIn) {
    const url = new URL('/admin/login', request.url)
    url.searchParams.set('next', pathname + search)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}

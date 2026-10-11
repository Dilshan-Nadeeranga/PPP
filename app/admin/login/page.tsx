import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Admin sign in - Prasanna Picture Palace',
  robots: { index: false, follow: false },
}

export default function AdminLoginPage({ searchParams }: { searchParams: { next?: string } }) {
  const next = typeof searchParams.next === 'string' ? searchParams.next : '/admin'

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-canvas px-4 py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-glow/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sun/20 blur-3xl" />
      </div>

      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <Image src="/logo-mark.png" alt="" width={56} height={56} priority className="h-14 w-14" />
          <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Admin sign in</h1>
          <p className="mt-1 text-ink-muted">Prasanna Picture Palace back office</p>
        </div>

        <div className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(15,27,29,0.35)] sm:p-7">
          <LoginForm next={next} />
        </div>

        <p className="mt-6 text-center text-sm text-ink-muted">
          <Link href="/" className="underline underline-offset-2 hover:text-ink">
            ← Back to the website
          </Link>
        </p>
      </div>
    </main>
  )
}

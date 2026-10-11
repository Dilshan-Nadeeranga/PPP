import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { logout } from '../actions'
import AdminNav from './AdminNav'

export const metadata: Metadata = {
  title: 'Admin - Prasanna Picture Palace',
  robots: { index: false, follow: false },
}

function LogoutButton({ className }: { className: string }) {
  return (
    <form action={logout}>
      <button type="submit" className={className}>
        Log out
      </button>
    </form>
  )
}

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink md:grid md:grid-cols-[240px_1fr]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen flex-col bg-ink p-5 text-white md:flex">
        <Link href="/admin" className="flex items-center gap-3">
          <Image src="/logo-mark-white.png" alt="" width={40} height={40} className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block font-display font-semibold">PPP Admin</span>
            <span className="block text-xs text-white/60">Back office</span>
          </span>
        </Link>
        <div className="mt-8 flex-1">
          <AdminNav variant="sidebar" />
        </div>
        <div className="space-y-1 border-t border-white/10 pt-4">
          <Link
            href="/"
            target="_blank"
            className="block rounded-xl px-3.5 py-2.5 font-medium text-white/70 hover:bg-white/5 hover:text-white"
          >
            View website ↗
          </Link>
          <LogoutButton className="w-full rounded-xl px-3.5 py-2.5 text-left font-medium text-white/70 hover:bg-white/5 hover:text-white" />
        </div>
      </aside>

      {/* Phone header */}
      <header className="sticky top-0 z-30 border-b border-line bg-white md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/admin" className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="font-display font-semibold">PPP Admin</span>
          </Link>
          <div className="flex items-center gap-1">
            <Link href="/" target="_blank" className="rounded-lg px-2.5 py-2 text-sm font-medium text-ink-muted hover:bg-canvas">
              Site ↗
            </Link>
            <LogoutButton className="rounded-lg px-2.5 py-2 text-sm font-medium text-ink-muted hover:bg-canvas" />
          </div>
        </div>
        <div className="px-2">
          <AdminNav variant="tabs" />
        </div>
      </header>

      <main className="min-w-0 px-4 py-6 sm:px-6 md:px-10 md:py-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  )
}

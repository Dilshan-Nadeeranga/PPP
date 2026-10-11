'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/settings', label: 'Shop details' },
]

const isActive = (pathname: string, href: string) =>
  href === '/admin' ? pathname === '/admin' : pathname === href || pathname.startsWith(`${href}/`)

/** Vertical list in the desktop sidebar, horizontal tabs on phones. */
export default function AdminNav({ variant }: { variant: 'sidebar' | 'tabs' }) {
  const pathname = usePathname() ?? '/admin'

  if (variant === 'tabs') {
    return (
      <nav aria-label="Admin" className="no-scrollbar flex gap-1 overflow-x-auto">
        {links.map(({ href, label }) => {
          const active = isActive(pathname, href)
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`shrink-0 border-b-2 px-3 py-3 text-sm font-semibold transition-colors ${
                active ? 'border-brand text-ink' : 'border-transparent text-ink-muted hover:text-ink'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <nav aria-label="Admin">
      <ul className="space-y-1">
        {links.map(({ href, label }) => {
          const active = isActive(pathname, href)
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-xl px-3.5 py-2.5 font-medium transition-colors ${
                  active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

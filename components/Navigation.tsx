'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { site } from '@/lib/site'
import { CloseIcon, LogoMark, MenuIcon } from './icons'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Services' },
  { href: '/category', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navigation() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50">
      {/* Info bar */}
      <div className="hidden bg-ink text-[13px] text-white/80 md:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <p className="truncate">
            {site.address}
            {site.openingHours && <span className="hidden sm:inline"> · Open {site.openingHours}</span>}
          </p>
          <div className="flex shrink-0 items-center gap-5">
            <a href={`mailto:${site.email}`} className="hidden transition-colors hover:text-white sm:inline">
              {site.email}
            </a>
            <a href={site.phoneHref} className="transition-colors hover:text-white">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav aria-label="Main" className="border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[72px]">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-[#0d8a8a] text-white">
              <LogoMark className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-semibold text-ink">{site.name}</span>
              <span className="block text-xs text-ink-muted">{site.tagline}</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                      active ? 'bg-brand-soft text-ink' : 'text-ink-soft hover:bg-canvas hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#quote"
              className="hidden rounded-lg bg-brand px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-block"
            >
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-canvas lg:hidden"
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" hidden={!open} className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                      active ? 'bg-brand-soft text-ink' : 'text-ink-soft hover:bg-canvas'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2 sm:hidden">
              <Link
                href="/#quote"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-brand px-4 py-3 text-center font-semibold text-white"
              >
                Get a quote
              </Link>
            </li>
            <li className="mt-2 border-t border-line px-3 pt-3 text-sm text-ink-muted">
              <a href={site.phoneHref} className="block py-1 hover:text-ink">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="block py-1 hover:text-ink">
                {site.email}
              </a>
              <p className="py-1">
                {site.address}
                {site.openingHours && ` · Open ${site.openingHours}`}
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

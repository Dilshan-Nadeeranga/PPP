import Link from 'next/link'
import { site } from '@/lib/site'

const links = [
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Services' },
  { href: '/category', label: 'Categories' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="mt-3 leading-relaxed text-white/70">
              Glass cutting and installation, door hardware and aluminum pantry cupboards in Mirigama.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-white/10 py-6 text-sm text-white/60">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { getSite, getVisibleProducts } from '@/lib/store'
import { PhoneIcon, RulerIcon } from '@/components/icons'
import ProductsCatalog from '@/components/products/ProductsCatalog'

export const metadata: Metadata = {
  title: 'Products - Prasanna Picture Palace',
  description:
    'Glass, door hardware, aluminum pantry parts and boards in Mirigama. Add what you need to your enquiry list and send it to us on WhatsApp for a price.',
}

export default async function ProductsPage() {
  const [site, products] = await Promise.all([getSite(), getVisibleProducts()])

  return (
    <div className="bg-canvas text-ink">
      <div className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#eef7f6] to-canvas" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-glow/25 blur-3xl" />
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-sun/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="underline underline-offset-2 hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Products
              </li>
            </ol>
          </nav>

          <header className="mt-4 grid gap-5 md:mt-5 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
            <div>
              <h1 className="font-display text-[40px] font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl">Products</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                Glass, door hardware, aluminum pantry parts and boards. Add what you need to your enquiry list and send it to us
                on WhatsApp for a price.
              </p>
            </div>
            <div className="flex max-w-sm items-start gap-3 rounded-2xl border border-line bg-white p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sun-soft text-sun-deep">
                <RulerIcon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-ink-soft">
                Prices depend on size and thickness, so we quote each order. Most replies the same day.
              </p>
            </div>
          </header>

          <div className="mt-6 sm:mt-8">
            <ProductsCatalog products={products} />
          </div>

          {/* CTA */}
          <section className="relative isolate mt-14 overflow-hidden rounded-3xl bg-ink px-6 py-8 text-white sm:mt-20 sm:px-10 sm:py-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-brand/50 blur-3xl" />
              <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-sun/20 blur-3xl" />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">Need glass cut or a cupboard made?</h2>
                <p className="mt-2 text-white/75">Send your measurements and we&apos;ll quote the cutting, making and fitting together.</p>
              </div>
              <div className="grid gap-3 sm:flex sm:shrink-0">
                <Link
                  href="/#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-ink transition-colors hover:bg-brand-soft"
                >
                  <RulerIcon className="h-5 w-5 text-brand" />
                  Use the size tool
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {site.phoneLocal}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { categories, type CategoryId, type Product } from '@/lib/products'
import { whatsappLink } from '@/lib/site'
import { useSite } from '@/components/SiteProvider'
import { CloseIcon } from '@/components/icons'
import ProductCard from './ProductCard'
import EnquiryDrawer, { type EnquiryItem } from './EnquiryDrawer'

type Filter = 'all' | CategoryId

const STORAGE_KEY = 'ppp-enquiry'
const isCategory = (v: string): v is CategoryId => categories.some((c) => c.id === v)

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  )
}

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" />
    </svg>
  )
}

export default function ProductsCatalog({ products }: { products: Product[] }) {
  const site = useSite()
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')
  const [items, setItems] = useState<EnquiryItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Category from the URL hash, e.g. /category#glass (used by the home page cards)
  useEffect(() => {
    const readHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1))
      if (isCategory(id)) setFilter(id)
    }
    readHash()
    window.addEventListener('hashchange', readHash)
    return () => window.removeEventListener('hashchange', readHash)
  }, [])

  // Keep the enquiry list for this visitor between visits
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
      if (Array.isArray(saved)) {
        setItems(
          saved.filter(
            (i): i is EnquiryItem =>
              i && products.some((p) => p.slug === i.slug) && typeof i.qty === 'number' && typeof i.note === 'string',
          ),
        )
      }
    } catch {
      // Storage unavailable or corrupt: start with an empty list
    }
    setLoaded(true)
  }, [products])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore: the list still works for this visit
    }
  }, [items, loaded])

  const selectFilter = (next: Filter) => {
    setFilter(next)
    const url = next === 'all' ? window.location.pathname + window.location.search : `#${next}`
    window.history.replaceState(null, '', url)
  }

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: products.length }
    for (const p of products) map[p.category] = (map[p.category] ?? 0) + 1
    return map
  }, [products])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      if (filter !== 'all' && p.category !== filter) return false
      if (!q) return true
      const category = categories.find((c) => c.id === p.category)
      return [p.name, p.description, category?.name, category?.short].some((text) => text?.toLowerCase().includes(q))
    })
  }, [products, filter, query])

  const groups = categories
    .map((category) => ({ category, items: visible.filter((p) => p.category === category.id) }))
    .filter((g) => g.items.length > 0)

  const slugs = useMemo(() => new Set(items.map((i) => i.slug)), [items])

  const toggle = (slug: string) =>
    setItems((prev) => (prev.some((i) => i.slug === slug) ? prev.filter((i) => i.slug !== slug) : [...prev, { slug, qty: 1, note: '' }]))

  const updateItem = useCallback(
    (slug: string, patch: Partial<Omit<EnquiryItem, 'slug'>>) =>
      setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, ...patch } : i))),
    [],
  )
  const removeItem = useCallback((slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug)), [])
  const clearItems = useCallback(() => setItems([]), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  const filters: { id: Filter; label: string }[] = [{ id: 'all', label: 'All' }, ...categories.map((c) => ({ id: c.id, label: c.short }))]

  return (
    <>
      {/* Filters + search: sticky under the header */}
      <div className="sticky top-[var(--header-h)] z-30 -mx-4 border-b border-line/70 bg-canvas/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 md:static md:mx-0 md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div
            role="group"
            aria-label="Filter by category"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
          >
            {filters.map(({ id, label }) => {
              const active = filter === id
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectFilter(id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink/30'
                  }`}
                >
                  {label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[11px] leading-none ${
                      active ? 'bg-white/15 text-white' : 'bg-canvas text-ink-muted'
                    }`}
                  >
                    {counts[id]}
                  </span>
                </button>
              )
            })}
          </div>

          <label className="relative block md:w-80">
            <span className="sr-only">Search products</span>
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search, e.g. hinges"
              className="h-11 w-full rounded-xl border border-line bg-white pl-11 pr-10 text-base text-ink outline-none placeholder:text-ink-muted/80 focus:border-brand focus:ring-4 focus:ring-brand/15 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-ink-muted hover:bg-canvas hover:text-ink"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-muted" aria-live="polite">
        Showing {visible.length} product{visible.length === 1 ? '' : 's'}
        {query.trim() && <> for “{query.trim()}”</>}
      </p>

      {groups.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-line bg-white px-6 py-14 text-center">
          <p className="font-display text-xl font-semibold text-ink">No products match “{query.trim()}”</p>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">We stock more than we list here. Ask us and we’ll tell you if we have it.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(site, `Hi, do you have ${query.trim()}?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-whatsapp px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              Ask on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                selectFilter('all')
              }}
              className="rounded-xl border border-line bg-white px-5 py-3 font-semibold text-ink hover:border-ink/30"
            >
              Show all products
            </button>
          </div>
        </div>
      ) : (
        groups.map(({ category, items: groupItems }) => (
          <section key={category.id} aria-labelledby={`group-${category.id}`} className="mt-8 sm:mt-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3">
              <h2 id={`group-${category.id}`} className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {category.name}
              </h2>
              <p className="text-sm text-ink-muted">{category.tagline}</p>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {groupItems.map((product) => (
                <li key={product.slug}>
                  <ProductCard
                    product={product}
                    category={category}
                    inEnquiry={slugs.has(product.slug)}
                    onToggle={() => toggle(product.slug)}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}

      {/* Floating enquiry button: sits above the mobile Call/WhatsApp bar */}
      <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        aria-label={`Open enquiry list, ${items.length} product${items.length === 1 ? '' : 's'}`}
        aria-hidden={items.length === 0}
        tabIndex={items.length ? 0 : -1}
        className={`fixed bottom-[calc(88px+env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2.5 rounded-full bg-ink py-3 pl-4 pr-3 font-semibold text-white shadow-[0_16px_32px_-12px_rgba(15,27,29,0.6)] transition-all duration-300 hover:bg-brand-dark md:bottom-6 md:right-6 ${
          items.length ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ListIcon className="h-5 w-5" />
        Enquiry list
        <span className="grid h-6 min-w-[24px] place-items-center rounded-full bg-sun px-1.5 text-sm text-ink">{items.length}</span>
      </button>

      <EnquiryDrawer
        open={drawerOpen}
        products={products}
        items={items}
        onClose={closeDrawer}
        onChange={updateItem}
        onRemove={removeItem}
        onClear={clearItems}
      />
    </>
  )
}

import Link from 'next/link'
import { categories, isCategoryId } from '@/lib/products'
import { getStore } from '@/lib/store'
import { categoryStyles } from '@/components/products/categoryStyles'
import { deleteProduct, setProductHidden } from '../../actions'
import { Notice, PageHeader } from '../ui'
import ConfirmButton from './ConfirmButton'

type Props = { searchParams: { category?: string; q?: string; saved?: string } }

export default async function AdminProductsPage({ searchParams }: Props) {
  const { products } = await getStore()
  const category = isCategoryId(searchParams.category) ? searchParams.category : null
  const q = (searchParams.q ?? '').trim()

  const list = products.filter(
    (p) =>
      (!category || p.category === category) &&
      (!q || `${p.name} ${p.description}`.toLowerCase().includes(q.toLowerCase())),
  )

  const filterHref = (id: string | null) => {
    const params = new URLSearchParams()
    if (id) params.set('category', id)
    if (q) params.set('q', q)
    const s = params.toString()
    return `/admin/products${s ? `?${s}` : ''}`
  }

  const chip = (active: boolean) =>
    `shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
      active ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink/30'
    }`

  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        description={`${products.length} products · hidden ones don't appear on the website`}
        action={
          <Link href="/admin/products/new" className="rounded-xl bg-brand px-4 py-2.5 font-semibold text-white hover:bg-brand-dark">
            + Add product
          </Link>
        }
      />

      {searchParams.saved && <Notice tone="success">Saved “{searchParams.saved}”.</Notice>}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          <Link href={filterHref(null)} className={chip(!category)} aria-current={!category ? 'page' : undefined}>
            All
          </Link>
          {categories.map((c) => (
            <Link key={c.id} href={filterHref(c.id)} className={chip(category === c.id)} aria-current={category === c.id ? 'page' : undefined}>
              {c.short}
            </Link>
          ))}
        </div>
        <form className="flex gap-2 lg:w-80" role="search">
          {category && <input type="hidden" name="category" value={category} />}
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search products"
            aria-label="Search products"
            className="h-11 min-w-0 flex-1 rounded-xl border border-line bg-white px-4 text-base outline-none focus:border-brand focus:ring-4 focus:ring-brand/15"
          />
          <button type="submit" className="h-11 rounded-xl border border-line bg-white px-4 font-semibold hover:border-ink/30">
            Search
          </button>
        </form>
      </div>

      {list.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-line bg-white px-6 py-12 text-center text-ink-muted">
          No products found.
        </div>
      ) : (
        <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
          {list.map((p) => {
            const cat = categories.find((c) => c.id === p.category)
            return (
              <li key={p.slug} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${categoryStyles[p.category].dot}`} aria-hidden="true" />
                    <Link href={`/admin/products/${p.slug}`} className="font-semibold hover:text-brand">
                      {p.name}
                    </Link>
                    {p.hidden && (
                      <span className="rounded-full bg-canvas px-2 py-0.5 text-xs font-semibold text-ink-muted">Hidden</span>
                    )}
                    {p.image && (
                      <span className="rounded-full bg-sky-soft px-2 py-0.5 text-xs font-semibold text-sky-deep">Photo</span>
                    )}
                  </div>
                  <p className="mt-1 truncate text-sm text-ink-muted">
                    {cat?.short} · {p.description || 'No description'}
                  </p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <Link
                    href={`/admin/products/${p.slug}`}
                    className="rounded-lg border border-line px-3 py-2 text-sm font-semibold hover:border-ink/30"
                  >
                    Edit
                  </Link>
                  <form action={setProductHidden}>
                    <input type="hidden" name="slug" value={p.slug} />
                    <input type="hidden" name="hidden" value={p.hidden ? 'false' : 'true'} />
                    <ConfirmButton className="rounded-lg border border-line px-3 py-2 text-sm font-semibold hover:border-ink/30">
                      {p.hidden ? 'Show' : 'Hide'}
                    </ConfirmButton>
                  </form>
                  <form action={deleteProduct}>
                    <input type="hidden" name="slug" value={p.slug} />
                    <ConfirmButton
                      message={`Delete “${p.name}”? This can't be undone. (Use Hide to remove it from the website temporarily.)`}
                      className="rounded-lg border border-line px-3 py-2 text-sm font-semibold text-coral-deep hover:border-coral"
                    >
                      Delete
                    </ConfirmButton>
                  </form>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

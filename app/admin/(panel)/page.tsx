import Link from 'next/link'
import { categories } from '@/lib/products'
import { getStore, storageLabel } from '@/lib/store'
import { toSite } from '@/lib/site'
import { categoryStyles } from '@/components/products/categoryStyles'
import { Notice, PageHeader } from './ui'

export default async function AdminDashboard() {
  const { products, settings } = await getStore()
  const site = toSite(settings)
  const hidden = products.filter((p) => p.hidden).length
  const usingDefaultLogin = !process.env.ADMIN_PASSWORD

  const stats = [
    { label: 'Products', value: products.length },
    { label: 'Shown on site', value: products.length - hidden },
    { label: 'Hidden', value: hidden },
  ]

  return (
    <div className="space-y-8">
      <PageHeader title="Dashboard" description="Manage what customers see on the website." />

      <div className="space-y-3">
        {storageLabel === 'Not set up' && (
          <Notice tone="error">
            Saving is not set up on this server, so changes can&apos;t be saved yet. In Vercel, add the “Upstash for Redis”
            integration to this project and redeploy.
          </Notice>
        )}
        {usingDefaultLogin && process.env.NODE_ENV === 'production' && (
          <Notice tone="warning">
            You&apos;re using the built-in admin password. Set <code>ADMIN_EMAIL</code> and <code>ADMIN_PASSWORD</code> in your
            hosting environment variables to change it.
          </Notice>
        )}
      </div>

      <section aria-label="Summary" className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="rounded-2xl border border-line bg-white p-4 sm:p-5">
            <p className="text-sm text-ink-muted">{label}</p>
            <p className="mt-1 font-display text-3xl font-semibold">{value}</p>
          </div>
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-3xl border border-line bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-lg font-semibold">Products by category</h2>
            <Link href="/admin/products" className="text-sm font-semibold text-brand hover:text-brand-dark">
              Manage →
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-line">
            {categories.map((c) => {
              const inCategory = products.filter((p) => p.category === c.id)
              return (
                <li key={c.id}>
                  <Link href={`/admin/products?category=${c.id}`} className="flex items-center justify-between gap-3 py-3 hover:text-brand">
                    <span className="flex items-center gap-2.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${categoryStyles[c.id].dot}`} aria-hidden="true" />
                      {c.short}
                    </span>
                    <span className="text-sm text-ink-muted">
                      {inCategory.length} product{inCategory.length === 1 ? '' : 's'}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            href="/admin/products/new"
            className="mt-4 inline-flex rounded-xl bg-brand px-4 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            + Add product
          </Link>
        </section>

        <section className="rounded-3xl border border-line bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-lg font-semibold">Shop details</h2>
            <Link href="/admin/settings" className="text-sm font-semibold text-brand hover:text-brand-dark">
              Edit →
            </Link>
          </div>
          <dl className="mt-4 divide-y divide-line text-sm">
            {[
              ['Phone', site.phoneDisplay],
              ['WhatsApp', site.whatsapp || site.phoneDisplay],
              ['Email', site.email],
              ['Address', site.address],
              ['Opening hours', site.openingHours || 'Not set (hidden on site)'],
              ['Years in business', site.yearsInBusiness ? String(site.yearsInBusiness) : 'Not set (hidden on site)'],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[120px_1fr] gap-3 py-2.5">
                <dt className="text-ink-muted">{label}</dt>
                <dd className="min-w-0 break-words font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <p className="text-sm text-ink-muted">Data is saved in: {storageLabel}</p>
    </div>
  )
}

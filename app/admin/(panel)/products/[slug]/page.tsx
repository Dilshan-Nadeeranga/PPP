import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getStore } from '@/lib/store'
import { PageHeader } from '../../ui'
import ProductForm from '../ProductForm'

export default async function EditProductPage({ params }: { params: { slug: string } }) {
  const { products } = await getStore()
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  return (
    <div className="max-w-2xl space-y-6">
      <Link href="/admin/products" className="text-sm font-medium text-ink-muted hover:text-ink">
        ← Products
      </Link>
      <PageHeader title={`Edit ${product.name}`} />
      <ProductForm product={product} />
    </div>
  )
}

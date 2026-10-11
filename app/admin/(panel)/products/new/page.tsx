import Link from 'next/link'
import { PageHeader } from '../../ui'
import ProductForm from '../ProductForm'

export default function NewProductPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <Link href="/admin/products" className="text-sm font-medium text-ink-muted hover:text-ink">
        ← Products
      </Link>
      <PageHeader title="Add product" />
      <ProductForm />
    </div>
  )
}

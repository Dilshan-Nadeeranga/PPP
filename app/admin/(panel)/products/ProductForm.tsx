'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { categories, type Product } from '@/lib/products'
import { saveProduct, type FormState } from '../../actions'
import { Field, Notice, inputClass } from '../ui'

function SaveButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
    >
      {pending ? 'Saving…' : label}
    </button>
  )
}

export default function ProductForm({ product }: { product?: Product }) {
  const [state, action] = useFormState<FormState, FormData>(saveProduct, {})
  const [description, setDescription] = useState(product?.description ?? '')
  const errors = state.fieldErrors ?? {}

  return (
    <form action={action} className="space-y-6" noValidate>
      {product && <input type="hidden" name="slug" value={product.slug} />}
      {state.error && <Notice tone="error">{state.error}</Notice>}

      <div className="space-y-5 rounded-3xl border border-line bg-white p-5 sm:p-7">
        <Field label="Name" error={errors.name}>
          <input name="name" defaultValue={product?.name} required maxLength={80} className={inputClass(errors.name)} />
        </Field>

        <Field label="Category" error={errors.category}>
          <select name="category" defaultValue={product?.category ?? ''} required className={inputClass(errors.category)}>
            <option value="" disabled>
              Choose a category
            </option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.short}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Description" hint={`${description.length}/200 · shown on the product card`} error={errors.description}>
          <textarea
            name="description"
            rows={3}
            maxLength={200}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${inputClass(errors.description)} resize-y`}
          />
        </Field>

        <Field
          label="Photo (optional)"
          hint="Path of a photo in the public folder, e.g. /products/hinges.jpg, or a full https:// link. Leave empty to show the illustration."
          error={errors.image}
        >
          <input name="image" defaultValue={product?.image} placeholder="/products/…" className={inputClass(errors.image)} />
        </Field>

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-canvas p-4">
          <input
            type="checkbox"
            name="hidden"
            defaultChecked={product?.hidden}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#0b6e74]"
          />
          <span>
            <span className="block font-semibold">Hide from the website</span>
            <span className="block text-sm text-ink-muted">Keeps the product here but customers won&apos;t see it.</span>
          </span>
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <SaveButton label={product ? 'Save changes' : 'Add product'} />
        <Link href="/admin/products" className="rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:border-ink/30">
          Cancel
        </Link>
      </div>
    </form>
  )
}

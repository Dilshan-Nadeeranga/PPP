'use client'

import { useEffect, useRef } from 'react'
import { site, whatsappLink } from '@/lib/site'
import { products } from '@/lib/products'
import { ChatIcon, CloseIcon } from '@/components/icons'
import { categoryStyles } from './categoryStyles'

export type EnquiryItem = { slug: string; qty: number; note: string }

type Props = {
  open: boolean
  items: EnquiryItem[]
  onClose: () => void
  onChange: (slug: string, patch: Partial<Omit<EnquiryItem, 'slug'>>) => void
  onRemove: (slug: string) => void
  onClear: () => void
}

const MAX_QTY = 999

export function buildEnquiryMessage(items: EnquiryItem[]) {
  const lines = items.map((item, i) => {
    const product = products.find((p) => p.slug === item.slug)
    const note = item.note.trim()
    return `${i + 1}. ${product?.name ?? item.slug} × ${item.qty}${note ? ` — ${note}` : ''}`
  })
  return `Hi ${site.name}, I'd like a price for:\n${lines.join('\n')}\n\nThank you!`
}

export default function EnquiryDrawer({ open, items, onClose, onChange, onRemove, onClear }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0)

  // Escape to close, lock page scroll and move focus into the panel while open
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-[60] transition-[visibility] duration-300 ${open ? 'visible' : 'pointer-events-none invisible'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Bottom sheet on phones, side panel from md up */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        tabIndex={-1}
        className={`absolute inset-x-0 bottom-0 flex max-h-[88svh] flex-col rounded-t-3xl bg-white shadow-2xl outline-none transition-transform duration-300 ease-out motion-reduce:transition-none md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[440px] md:rounded-none md:rounded-l-3xl ${
          open ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-x-full md:translate-y-0'
        }`}
      >
        <div className="mx-auto mt-2.5 h-1.5 w-10 rounded-full bg-line md:hidden" aria-hidden="true" />
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <div>
            <h2 id="enquiry-title" className="font-display text-xl font-semibold text-ink">
              Your enquiry list
            </h2>
            <p className="text-sm text-ink-muted">
              {items.length === 0
                ? 'Nothing added yet'
                : `${items.length} product${items.length === 1 ? '' : 's'} · ${totalQty} item${totalQty === 1 ? '' : 's'}`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry list"
            className="grid h-11 w-11 place-items-center rounded-xl text-ink hover:bg-canvas"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
          {items.length === 0 ? (
            <div className="py-10 text-center">
              <p className="font-semibold text-ink">Your list is empty</p>
              <p className="mt-1 text-ink-muted">Tap “Add” on any product to build your enquiry.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => {
                const product = products.find((p) => p.slug === item.slug)
                if (!product) return null
                const { dot } = categoryStyles[product.category]
                return (
                  <li key={item.slug} className="rounded-2xl border border-line p-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="flex items-center gap-2 font-semibold text-ink">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
                        {product.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => onRemove(item.slug)}
                        className="-mr-1 -mt-1 rounded-lg px-2 py-1 text-sm font-medium text-ink-muted hover:bg-canvas hover:text-coral-deep"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center rounded-xl border border-line" role="group" aria-label={`Quantity for ${product.name}`}>
                        <button
                          type="button"
                          onClick={() => onChange(item.slug, { qty: Math.max(1, item.qty - 1) })}
                          disabled={item.qty <= 1}
                          aria-label="Decrease quantity"
                          className="grid h-10 w-10 place-items-center text-lg text-ink disabled:text-ink/25"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          inputMode="numeric"
                          min={1}
                          max={MAX_QTY}
                          value={item.qty}
                          onChange={(e) => {
                            const n = parseInt(e.target.value, 10)
                            onChange(item.slug, { qty: Number.isFinite(n) ? Math.min(MAX_QTY, Math.max(1, n)) : 1 })
                          }}
                          aria-label="Quantity"
                          className="h-10 w-12 border-x border-line text-center text-base font-semibold text-ink outline-none [appearance:textfield] focus:bg-brand-soft [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                        <button
                          type="button"
                          onClick={() => onChange(item.slug, { qty: Math.min(MAX_QTY, item.qty + 1) })}
                          aria-label="Increase quantity"
                          className="grid h-10 w-10 place-items-center text-lg text-ink"
                        >
                          +
                        </button>
                      </div>
                      <input
                        type="text"
                        value={item.note}
                        onChange={(e) => onChange(item.slug, { note: e.target.value })}
                        placeholder="Size, thickness, finish…"
                        aria-label={`Note for ${product.name}`}
                        maxLength={120}
                        className="h-10 min-w-0 flex-1 rounded-xl border border-line px-3 text-base text-ink outline-none placeholder:text-ink-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-line px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
          <a
            href={items.length ? whatsappLink(buildEnquiryMessage(items)) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={items.length === 0}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-lg font-semibold text-white transition-colors ${
              items.length ? 'bg-whatsapp hover:opacity-90' : 'pointer-events-none bg-ink/20'
            }`}
          >
            <ChatIcon className="h-5 w-5" />
            Send list on WhatsApp
          </a>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-ink-muted">We reply with a price, usually the same day.</span>
            {items.length > 0 && (
              <button type="button" onClick={onClear} className="font-medium text-ink-muted underline underline-offset-2 hover:text-coral-deep">
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

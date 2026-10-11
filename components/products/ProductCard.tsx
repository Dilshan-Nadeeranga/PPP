import Image from 'next/image'
import { whatsappLink } from '@/lib/site'
import type { Category, Product } from '@/lib/products'
import { ChatIcon, CheckIcon } from '@/components/icons'
import { categoryStyles } from './categoryStyles'

type Props = {
  product: Product
  category: Category
  inEnquiry: boolean
  onToggle: () => void
}

export default function ProductCard({ product, category, inEnquiry, onToggle }: Props) {
  const { Art, art, label } = categoryStyles[product.category]

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_18px_36px_-24px_rgba(15,27,29,0.35)] sm:rounded-3xl">
      <div className={`relative aspect-[4/3] ${art}`}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 px-6 py-4 sm:px-10 sm:py-6">
            <Art />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] sm:text-xs ${label}`}>{category.short}</p>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink sm:text-lg">{product.name}</h3>
        <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-ink-soft sm:text-sm">{product.description}</p>
        <p className="mt-2 text-xs text-ink-muted sm:text-[13px]">Price on request</p>

        <div className="mt-auto flex gap-2 pt-3 sm:pt-4">
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={inEnquiry}
            className={`flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 text-sm font-semibold transition-colors ${
              inEnquiry
                ? 'border-brand bg-brand text-white hover:bg-brand-dark'
                : 'border-brand/50 text-brand hover:border-brand hover:bg-brand-soft'
            }`}
          >
            {inEnquiry ? (
              <>
                <CheckIcon className="h-4 w-4" strokeWidth={2.5} />
                Added
              </>
            ) : (
              <>
                <span className="sm:hidden">+ Add</span>
                <span className="hidden sm:inline">Add to enquiry</span>
              </>
            )}
          </button>
          <a
            href={whatsappLink(`Hi, I'd like to ask about ${product.name.toLowerCase()}.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${product.name} on WhatsApp`}
            title="Ask on WhatsApp"
            className="grid min-h-[44px] w-11 shrink-0 place-items-center rounded-xl border border-line text-ink transition-colors hover:border-whatsapp hover:text-whatsapp"
          >
            <ChatIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </article>
  )
}

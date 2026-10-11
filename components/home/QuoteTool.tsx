'use client'

import { useId, useState } from 'react'
import { site, whatsappLink } from '@/lib/site'
import { ChatIcon } from '../icons'

const ITEMS = ['Glass sheet', 'Mirror', 'Glass door', 'Glass panel', 'Pantry cupboard'] as const
const UNITS = ['in', 'ft', 'cm', 'mm'] as const

type Item = (typeof ITEMS)[number]
type Unit = (typeof UNITS)[number]

// Preview box limits, in px
const MAX_W = 200
const MAX_H = 200
const MIN_SIDE = 36

function parse(value: string) {
  const n = parseFloat(value)
  return Number.isFinite(n) && n > 0 ? n : null
}

function format(n: number) {
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100)
}

function PreviewShape({ item }: { item: Item }) {
  const common = 'absolute inset-0 border-[3px] border-ink'
  if (item === 'Mirror') {
    return (
      <div
        className={`${common} rounded-[18px]`}
        style={{ background: 'linear-gradient(135deg, #f2f4f4 0%, #b4bdbc 50%, #7a8584 100%)' }}
      />
    )
  }
  if (item === 'Pantry cupboard') {
    return (
      <div className={`${common} flex gap-[3px] bg-white p-[3px]`}>
        {[0, 1].map((i) => (
          <div key={i} className="relative flex-1 bg-brand-mist">
            <span
              className={`absolute top-1/2 h-[18%] max-h-10 w-[3px] -translate-y-1/2 rounded bg-brand ${
                i === 0 ? 'right-2' : 'left-2'
              }`}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className={`${common} overflow-hidden bg-[#dbe9e8]`}>
      <span className="absolute -inset-x-1/2 top-1/2 h-[14%] -translate-y-1/2 -rotate-[58deg] bg-white" />
      <span className="absolute -inset-x-1/2 top-[64%] h-[6%] -translate-y-1/2 -rotate-[58deg] bg-white" />
      {item === 'Glass door' && (
        <span className="absolute right-[10%] top-1/2 h-[16%] w-[5px] -translate-y-1/2 rounded bg-brand" />
      )}
    </div>
  )
}

export default function QuoteTool() {
  const [item, setItem] = useState<Item>('Glass sheet')
  const [width, setWidth] = useState('36')
  const [height, setHeight] = useState('48')
  const [unit, setUnit] = useState<Unit>('in')
  const [touched, setTouched] = useState(false)
  const uid = useId()

  const w = parse(width)
  const h = parse(height)
  const valid = w !== null && h !== null

  // Scale the preview to fit the box while keeping the real aspect ratio
  let boxW = 140
  let boxH = 180
  if (valid) {
    const scale = Math.min(MAX_W / w, MAX_H / h)
    boxW = Math.max(MIN_SIDE, w * scale)
    boxH = Math.max(MIN_SIDE, h * scale)
  }

  const summary = valid ? `${item} · ${format(w)} × ${format(h)} ${unit}` : item
  const message = valid
    ? `Hi ${site.name}, I'd like a price for a ${item.toLowerCase()}, ${format(w)} × ${format(h)} ${unit} (width × height).`
    : ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  const fieldClass = (ok: boolean) =>
    `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-lg text-ink outline-none transition-shadow focus:border-brand focus:ring-4 focus:ring-brand/15 ${
      touched && !ok ? 'border-red-400' : 'border-line'
    }`

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <form onSubmit={handleSubmit} noValidate>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">Free quote</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Tell us your size</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Pick what you need, enter the measurements and send them straight to our WhatsApp.
        </p>

        <fieldset className="mt-7">
          <legend className="font-semibold text-ink">What do you need?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {ITEMS.map((option) => (
              <label key={option} className="cursor-pointer">
                <input
                  type="radio"
                  name={`${uid}-item`}
                  value={option}
                  checked={item === option}
                  onChange={() => setItem(option)}
                  className="peer sr-only"
                />
                <span className="inline-block rounded-lg border border-line bg-white px-4 py-2.5 font-medium text-ink transition-colors hover:border-ink/30 peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <label className="block">
            <span className="font-semibold text-ink">Width</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              aria-invalid={touched && w === null}
              className={fieldClass(w !== null)}
            />
          </label>
          <label className="block">
            <span className="font-semibold text-ink">Height</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              aria-invalid={touched && h === null}
              className={fieldClass(h !== null)}
            />
          </label>
        </div>
        {touched && !valid && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            Enter a width and height greater than zero.
          </p>
        )}

        <fieldset className="mt-6">
          <legend className="font-semibold text-ink">Unit</legend>
          <div className="mt-3 inline-flex gap-1 rounded-xl bg-canvas p-1">
            {UNITS.map((option) => (
              <label key={option} className="cursor-pointer">
                <input
                  type="radio"
                  name={`${uid}-unit`}
                  value={option}
                  checked={unit === option}
                  onChange={() => setUnit(option)}
                  className="peer sr-only"
                />
                <span className="grid h-11 w-14 place-items-center rounded-lg font-medium text-ink-soft transition-colors hover:text-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
        >
          <ChatIcon className="h-5 w-5" />
          Send to WhatsApp
        </button>
        <p className="mt-4 text-sm text-ink-muted">
          Prefer to talk? Call{' '}
          <a href={site.phoneHref} className="text-brand underline underline-offset-2 hover:text-brand-dark">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </form>

      {/* Live preview */}
      <div
        className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-brand/25 bg-gradient-to-br from-brand-soft/60 via-canvas to-sun-soft/60 p-6 sm:min-h-[380px] sm:p-8"
        aria-live="polite"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">Preview</p>
        <div className="mt-4 flex h-[230px] items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap text-sm font-semibold text-brand [writing-mode:vertical-rl] rotate-180">
              {valid ? `${format(h)} ${unit}` : '—'}
            </span>
            <div className="flex flex-col items-center gap-3">
              <div
                className="relative transition-[width,height] duration-300 ease-out motion-reduce:transition-none"
                style={{ width: boxW, height: boxH }}
              >
                <PreviewShape item={item} />
              </div>
            </div>
          </div>
        </div>
        <span className="mt-1 text-sm font-semibold text-brand">{valid ? `${format(w)} ${unit}` : '—'}</span>
        <p className="mt-4 text-center font-medium text-ink">{summary}</p>
      </div>
    </div>
  )
}

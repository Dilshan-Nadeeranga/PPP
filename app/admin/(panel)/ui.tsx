// Small shared building blocks for admin pages.

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
        {description && <p className="mt-1 text-ink-muted">{description}</p>}
      </div>
      {action}
    </div>
  )
}

export function Notice({ tone = 'info', children }: { tone?: 'info' | 'success' | 'warning' | 'error'; children: React.ReactNode }) {
  const styles = {
    info: 'border-sky/30 bg-sky-soft text-sky-deep',
    success: 'border-brand/25 bg-brand-soft text-brand',
    warning: 'border-sun/40 bg-sun-soft text-sun-deep',
    error: 'border-coral/30 bg-coral-soft text-coral-deep',
  }[tone]
  return (
    <div role={tone === 'error' ? 'alert' : 'status'} className={`rounded-xl border px-4 py-3 text-sm font-medium ${styles}`}>
      {children}
    </div>
  )
}

export const inputClass = (error?: string) =>
  `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 ${
    error ? 'border-coral' : 'border-line'
  }`

export function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-sm text-coral-deep">{error}</span>
      ) : (
        hint && <span className="mt-1.5 block text-sm text-ink-muted">{hint}</span>
      )}
    </label>
  )
}

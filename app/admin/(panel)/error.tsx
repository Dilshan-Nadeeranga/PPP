'use client'

export default function AdminError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="rounded-3xl border border-coral/30 bg-white p-6 sm:p-8">
      <h1 className="font-display text-xl font-semibold text-ink">Something went wrong</h1>
      <p className="mt-2 text-ink-soft">
        {error.message?.includes('Saving is not set up')
          ? error.message
          : 'The change could not be completed. Please try again.'}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-5 rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
      >
        Try again
      </button>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { login, type FormState } from '../actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex h-12 w-full items-center justify-center rounded-xl bg-brand font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
    >
      {pending ? 'Signing in…' : 'Sign in'}
    </button>
  )
}

export default function LoginForm({ next }: { next: string }) {
  const [state, action] = useFormState<FormState, FormData>(login, {})
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form action={action} className="space-y-5" noValidate>
      <input type="hidden" name="next" value={next} />

      {state.error && (
        <p role="alert" className="rounded-xl border border-coral/30 bg-coral-soft px-4 py-3 text-sm font-medium text-coral-deep">
          {state.error}
        </p>
      )}

      <label className="block">
        <span className="text-sm font-semibold text-ink">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="username"
          required
          autoFocus
          className="mt-1.5 h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink outline-none focus:border-brand focus:ring-4 focus:ring-brand/15"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-ink">Password</span>
        <span className="relative mt-1.5 block">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            className="h-12 w-full rounded-xl border border-line bg-white pl-4 pr-20 text-base text-ink outline-none focus:border-brand focus:ring-4 focus:ring-brand/15"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2.5 py-1.5 text-sm font-medium text-ink-muted hover:bg-canvas hover:text-ink"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </span>
      </label>

      <SubmitButton />
    </form>
  )
}

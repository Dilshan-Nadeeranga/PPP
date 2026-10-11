'use client'

import { useFormStatus } from 'react-dom'

/** Submit button that asks for confirmation first (used for delete). */
export default function ConfirmButton({
  message,
  className,
  children,
}: {
  message?: string
  className: string
  children: React.ReactNode
}) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      onClick={(e) => {
        if (message && !window.confirm(message)) e.preventDefault()
      }}
      className={`${className} disabled:opacity-50`}
    >
      {pending ? '…' : children}
    </button>
  )
}

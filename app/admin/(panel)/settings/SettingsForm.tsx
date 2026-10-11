'use client'

import { useFormState, useFormStatus } from 'react-dom'
import type { SiteSettings } from '@/lib/site'
import { saveSettings, type FormState } from '../../actions'
import { Field, Notice, inputClass } from '../ui'

function SaveButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
    >
      {pending ? 'Saving…' : 'Save shop details'}
    </button>
  )
}

export default function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [state, action] = useFormState<FormState, FormData>(saveSettings, {})
  const e = state.fieldErrors ?? {}

  return (
    <form action={action} className="space-y-6" noValidate>
      {state.error && <Notice tone="error">{state.error}</Notice>}
      {state.ok && <Notice tone="success">Saved. The website now shows the new details.</Notice>}

      <section className="space-y-5 rounded-3xl border border-line bg-white p-5 sm:p-7">
        <h2 className="font-display text-lg font-semibold">Shop</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Shop name" error={e.name}>
            <input name="name" defaultValue={settings.name} className={inputClass(e.name)} />
          </Field>
          <Field label="Tagline" hint="Shown under the name in the header" error={e.tagline}>
            <input name="tagline" defaultValue={settings.tagline} className={inputClass(e.tagline)} />
          </Field>
        </div>
        <Field label="Address" hint="Also used for the Google Maps link and map" error={e.address}>
          <input name="address" defaultValue={settings.address} className={inputClass(e.address)} />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Opening hours" hint="e.g. Mon–Sat 8.30am–6pm · leave empty to hide" error={e.openingHours}>
            <input name="openingHours" defaultValue={settings.openingHours} className={inputClass(e.openingHours)} />
          </Field>
          <Field label="Years in business" hint="Leave empty to hide" error={e.yearsInBusiness}>
            <input
              name="yearsInBusiness"
              type="number"
              inputMode="numeric"
              min={1}
              max={200}
              defaultValue={settings.yearsInBusiness ?? ''}
              className={inputClass(e.yearsInBusiness)}
            />
          </Field>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-line bg-white p-5 sm:p-7">
        <h2 className="font-display text-lg font-semibold">Contact</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone" hint="With country code, e.g. +94 77 450 9011" error={e.phone}>
            <input name="phone" type="tel" defaultValue={settings.phone} className={inputClass(e.phone)} />
          </Field>
          <Field label="WhatsApp number" hint="Where enquiries are sent · leave empty to use the phone" error={e.whatsapp}>
            <input name="whatsapp" type="tel" defaultValue={settings.whatsapp} className={inputClass(e.whatsapp)} />
          </Field>
        </div>
        <Field label="Email" error={e.email}>
          <input name="email" type="email" defaultValue={settings.email} className={inputClass(e.email)} />
        </Field>
      </section>

      <SaveButton />
    </form>
  )
}

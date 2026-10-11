// Shop details. The values below are the defaults; the admin can change them in /admin/settings.

export type SiteSettings = {
  name: string
  tagline: string
  phone: string // shown as written, e.g. +94 77 450 9011
  whatsapp: string // international format, e.g. +94 77 450 9011
  email: string
  address: string
  openingHours: string // empty = hidden on the site
  yearsInBusiness: number | null // null = hidden on the site
}

export const defaultSettings: SiteSettings = {
  name: 'Prasanna Picture Palace',
  tagline: 'Glass · Hardware · Aluminum',
  phone: '+94 77 450 9011',
  whatsapp: '+94 77 450 9011',
  email: 'prasannapp@gmail.com',
  address: '64XH+393, Mirigama',
  openingHours: '',
  yearsInBusiness: null,
}

/** Settings plus the values worked out from them, as used by the pages. */
export type Site = SiteSettings & {
  phoneDisplay: string
  phoneLocal: string
  phoneHref: string
  whatsappNumber: string
  mapsUrl: string
  mapsEmbedUrl: string
}

const digits = (s: string) => s.replace(/\D/g, '')

export function toSite(settings: SiteSettings): Site {
  const phoneDigits = digits(settings.phone)
  // +94 77 450 9011 -> 077 450 9011 for local display
  const phoneLocal = settings.phone.trim().startsWith('+94')
    ? '0' + settings.phone.trim().slice(3).trim()
    : settings.phone
  const mapsQuery = encodeURIComponent(`${settings.name}, ${settings.address}`)
  return {
    ...settings,
    phoneDisplay: settings.phone,
    phoneLocal,
    phoneHref: `tel:+${phoneDigits}`,
    whatsappNumber: digits(settings.whatsapp || settings.phone),
    mapsUrl: `https://www.google.com/maps?q=${mapsQuery}`,
    mapsEmbedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  }
}

export function whatsappLink(site: Pick<Site, 'whatsappNumber'>, message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

// Shared business details used by the header, footer and home page.
// Fill in the two `null` values when known; anything left as null is hidden on the site.

export const site = {
  name: 'Prasanna Picture Palace',
  tagline: 'Glass · Hardware · Aluminum',
  phoneDisplay: '+94 77 450 9011',
  phoneLocal: '077 450 9011',
  phoneHref: 'tel:+94774509011',
  whatsappNumber: '94774509011',
  email: 'prasannapp@gmail.com',
  address: '64XH+393, Mirigama',
  mapsUrl: 'https://www.google.com/maps?q=Prasanna+Picture+Palace,+64XH+393,+Mirigama',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Prasanna+Picture+Palace,+64XH+393,+Mirigama&output=embed',

  // e.g. 'Mon–Sat 8.30am–6pm'
  openingHours: null as string | null,
  // e.g. 15
  yearsInBusiness: null as number | null,
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

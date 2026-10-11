import Link from 'next/link'
import type { Metadata } from 'next'
import type { ComponentType, SVGProps } from 'react'
import { site, whatsappLink } from '@/lib/site'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BoardIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  CupboardIcon,
  GridIcon,
  HomeIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  RulerIcon,
  ShieldIcon,
} from '@/components/icons'
import {
  DoorIllustration,
  GlassIllustration,
  HeroWindow,
  MapPattern,
  PantryIllustration,
} from '@/components/home/Illustrations'
import QuoteTool from '@/components/home/QuoteTool'

export const metadata: Metadata = {
  title: 'Prasanna Picture Palace - Custom Glass, Door Hardware & Aluminum Solutions',
  description: 'Professional glass cutting & installation, door hardware supply & fitting, and custom aluminum pantry cupboard fabrication. Quality services for your home and business needs in Mirigama.',
}

type IconType = ComponentType<SVGProps<SVGSVGElement>>

// Class names are written out in full so Tailwind can find them.
const contactCards: { icon: IconType; title: string; detail: string; href: string; chip: string; external?: boolean }[] = [
  { icon: PhoneIcon, title: 'Call us', detail: site.phoneDisplay, href: site.phoneHref, chip: 'bg-brand text-white' },
  { icon: ChatIcon, title: 'WhatsApp', detail: 'Send photos and sizes', href: whatsappLink(), chip: 'bg-whatsapp text-white', external: true },
  { icon: PinIcon, title: 'Visit the shop', detail: site.address, href: site.mapsUrl, chip: 'bg-coral-deep text-white', external: true },
  { icon: MailIcon, title: 'Email', detail: site.email, href: `mailto:${site.email}`, chip: 'bg-sky-deep text-white' },
]

const services = [
  {
    title: 'Custom glass cutting and installation',
    body: 'Precision cutting to any size or design — mirrors, partitions, doors, windows and decorative glass — installed on site for a clean finish.',
    tags: ['Glass sheets', 'Mirrors', 'Glass doors', 'Panels'],
    cta: 'Ask about glass',
    ask: 'Hi, I would like to ask about glass cutting and installation.',
    Art: GlassIllustration,
    art: 'bg-gradient-to-br from-brand-soft to-[#cfe7e5]',
    tag: 'bg-brand-soft text-brand',
    link: 'text-brand hover:text-brand-dark',
  },
  {
    title: 'Door hardware supply and fitting',
    body: 'Locks, hinges and handles for home and commercial doors, fitted so they open smoothly, lock securely and last.',
    tags: ['Door locks', 'Hinges', 'Handles'],
    cta: 'Ask about hardware',
    ask: 'Hi, I would like to ask about door hardware supply and fitting.',
    Art: DoorIllustration,
    art: 'bg-gradient-to-br from-sun-soft to-[#ffe2b0]',
    tag: 'bg-sun-soft text-sun-deep',
    link: 'text-sun-deep hover:text-ink',
  },
  {
    title: 'Aluminum pantry cupboard fabrication',
    body: 'Pantry cupboards made in aluminum to match your kitchen layout — durable, moisture-resistant and easy to keep clean.',
    tags: ['Pantry cupboards', 'Made to measure'],
    cta: 'Ask about pantry cupboards',
    ask: 'Hi, I would like to ask about an aluminum pantry cupboard.',
    Art: PantryIllustration,
    art: 'bg-gradient-to-br from-sky-soft to-[#cbe3fb]',
    tag: 'bg-sky-soft text-sky-deep',
    link: 'text-sky-deep hover:text-ink',
  },
]

const categories: { icon: IconType; title: string; detail: string; chip: string; hover: string }[] = [
  { icon: GridIcon, title: 'Glass products', detail: 'Sheets, mirrors, doors, panels', chip: 'bg-brand-soft text-brand', hover: 'hover:bg-brand hover:border-brand' },
  { icon: LockIcon, title: 'Door hardware', detail: 'Locks, hinges, handles', chip: 'bg-sun-soft text-sun-deep', hover: 'hover:bg-sun-deep hover:border-sun-deep' },
  { icon: CupboardIcon, title: 'Aluminum pantry', detail: 'Cupboards and fittings', chip: 'bg-sky-soft text-sky-deep', hover: 'hover:bg-sky-deep hover:border-sky-deep' },
  { icon: BoardIcon, title: 'Board items', detail: 'Boards and accessories', chip: 'bg-coral-soft text-coral-deep', hover: 'hover:bg-coral-deep hover:border-coral-deep' },
]

const steps = [
  { title: 'Send your size', body: 'Use the size tool below, call us, or send a photo with measurements on WhatsApp.', color: 'text-sun' },
  { title: 'Get your price', body: 'We confirm the glass type, thickness and finish, and send you a clear quote.', color: 'text-brand-glow' },
  { title: 'We cut, make and fit', body: 'Glass is cut to size and cupboards are built to your layout, then installed on site.', color: 'text-[#ff9f80]' },
]

const values: { icon: IconType; title: string; body: string; chip: string }[] = [
  { icon: RulerIcon, title: 'Measured properly', body: 'Precise cutting means glass and cupboards fit first time.', chip: 'bg-brand-soft text-brand' },
  { icon: HomeIcon, title: 'Fitted at your place', body: "Our team installs on site, so you don't have to carry glass.", chip: 'bg-sun-soft text-sun-deep' },
  { icon: ShieldIcon, title: 'Quality materials', body: 'Durable hardware and aluminum chosen to last for years.', chip: 'bg-sky-soft text-sky-deep' },
  site.yearsInBusiness
    ? {
        icon: ClockIcon,
        title: `${site.yearsInBusiness} years in Mirigama`,
        body: 'A local shop you can visit — see samples before you order.',
        chip: 'bg-coral-soft text-coral-deep',
      }
    : {
        icon: ClockIcon,
        title: 'Local to Mirigama',
        body: 'A shop you can visit — see samples before you order.',
        chip: 'bg-coral-soft text-coral-deep',
      },
]

const shopDetails = [
  { label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Address', value: site.address, href: site.mapsUrl },
  ...(site.openingHours ? [{ label: 'Hours', value: site.openingHours }] : []),
] as { label: string; value: string; href?: string }[]

function Eyebrow({ children, className = 'text-brand' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm font-semibold uppercase tracking-[0.12em] ${className}`}>{children}</p>
}

function SwipeHint() {
  return (
    <p className="flex items-center gap-1.5 text-sm font-medium text-ink-muted md:hidden" aria-hidden="true">
      Swipe
      <ArrowRightIcon className="h-4 w-4" />
    </p>
  )
}

const container = 'mx-auto max-w-6xl px-4 sm:px-6'
const h2 = 'font-display text-[30px] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.1]'
// Horizontal swipe row on phones, regular grid from md up
const swipeRow =
  'no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-3 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0'

export default function Home() {
  return (
    <div className="bg-canvas text-ink">
      {/* Hero: fills the screen below the header */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#eef7f6] via-canvas to-canvas" />
          <div className="absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-brand-glow/30 blur-3xl" />
          <div className="absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-sun/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[260px] w-[260px] rounded-full bg-coral/15 blur-3xl" />
        </div>

        <div className={`${container} hero-screen grid content-center items-center gap-12 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10`}>
          <div className="motion-safe:animate-fadeInUp">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand backdrop-blur">
              <PinIcon className="h-4 w-4" />
              Serving Mirigama and nearby towns
            </p>
            <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">
              Glass cut to your size.{' '}
              <span className="bg-gradient-to-r from-brand via-[#0d8a8a] to-sky-deep bg-clip-text text-transparent">
                Fitted by our team.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:mt-6 sm:text-xl">
              Mirrors, glass doors, partitions, door locks and handles, and aluminum pantry cupboards — measured, made and
              installed at your home or shop.
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <Link
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-lg font-semibold text-white shadow-[0_10px_24px_-10px_rgba(11,110,116,0.7)] transition-colors hover:bg-brand-dark sm:py-3.5"
              >
                Get a free quote
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-4 text-lg font-semibold text-ink transition-colors hover:border-ink/30 sm:py-3.5"
              >
                <PhoneIcon className="h-5 w-5 text-brand" />
                Call {site.phoneLocal}
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-ink-soft">
              {['Cut to any size', 'On-site installation', 'Homes and businesses'].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md pb-6 sm:max-w-lg lg:mr-0 lg:max-w-xl">
            <div className="relative aspect-[532/452] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#dff0ee] via-[#cfe5e3] to-[#ffe9c7] p-6 shadow-[0_30px_60px_-30px_rgba(11,110,116,0.45)] sm:p-10">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40" />
              <HeroWindow />
            </div>
            <Link
              href="#quote"
              className="absolute bottom-0 left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_32px_-12px_rgba(15,27,29,0.3)] transition-transform hover:-translate-y-0.5 sm:-left-3 sm:gap-4 sm:px-5 sm:py-3.5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-sun-soft text-sun-deep">
                <RulerIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-semibold text-ink">Send your size, get a price</span>
                <span className="block text-sm text-ink-muted">Reply on WhatsApp</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section aria-label="Contact options" className={`${container} pb-20 pt-4 sm:pb-24`}>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, title, detail, href, chip, external }) => (
            <li key={title}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_10px_24px_-16px_rgba(15,27,29,0.35)] sm:flex-row sm:items-center sm:gap-4"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${chip}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-semibold">{title}</span>
                  <span className="mt-1 block break-words text-sm text-ink-muted sm:truncate sm:text-base">{detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className={`${container} pb-20 sm:pb-28`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className={`${h2} mt-3 max-w-2xl`}>Three services, each supplied and fitted by us</h2>
          </div>
          <Link href="/service" className="group inline-flex shrink-0 items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">
            All services
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-3 flex justify-end">
          <SwipeHint />
        </div>
        <ul className={`${swipeRow} mt-3 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3`}>
          {services.map(({ title, body, tags, cta, ask, Art, art, tag, link }) => (
            <li key={title} className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(15,27,29,0.3)]">
                <div className={`${art} h-44 px-10 py-5 sm:h-56 sm:py-6`}>
                  <Art />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="font-display text-xl font-semibold leading-snug sm:text-[22px]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{body}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <li key={t} className={`rounded-full px-3 py-1 text-sm font-medium ${tag}`}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(ask)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold sm:pt-7 ${link}`}
                  >
                    {cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className={`${container} pb-20 sm:pb-24`}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Shop by category</Eyebrow>
            <h2 className={`${h2} mt-3`}>Find what you need</h2>
          </div>
          <SwipeHint />
        </div>
        <ul className={`${swipeRow} mt-6 md:mt-8 md:grid-cols-2 md:gap-3 lg:grid-cols-4`}>
          {categories.map(({ icon: Icon, title, detail, chip, hover }) => (
            <li key={title} className="w-[70%] shrink-0 snap-start sm:w-[45%] md:w-auto">
              <Link
                href="/category"
                className={`group flex h-full min-h-[180px] flex-col justify-between gap-8 rounded-3xl border border-line bg-white p-5 transition-colors duration-300 ${hover}`}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white ${chip}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="flex items-end justify-between gap-3">
                  <span className="leading-tight">
                    <span className="block font-display text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                      {title}
                    </span>
                    <span className="mt-1.5 block text-ink-muted transition-colors duration-300 group-hover:text-white/80">
                      {detail}
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sun/15 blur-3xl" />
        </div>
        <div className={container}>
          <Eyebrow className="text-brand-glow">How it works</Eyebrow>
          <h2 className={`${h2} mt-3`}>From a message to a finished fit</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {steps.map(({ title, body, color }, i) => (
              <li key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
                <span className={`font-display text-4xl font-semibold ${color}`}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote tool */}
      <section id="quote" className="scroll-mt-[var(--header-h)] bg-gradient-to-b from-canvas via-[#fdf6ea] to-canvas py-16 sm:py-24">
        <div className={container}>
          <div className="rounded-[28px] border border-line bg-white p-5 shadow-[0_30px_60px_-40px_rgba(15,27,29,0.35)] sm:p-10 lg:p-11">
            <QuoteTool />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section aria-label="Why choose us" className={`${container} pb-20 pt-4 sm:pb-24`}>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4 lg:gap-x-8">
          {values.map(({ icon: Icon, title, body, chip }) => (
            <li key={title}>
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${chip}`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold sm:text-lg">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft sm:text-base">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Visit */}
      <section className={`${container} grid gap-6 pb-20 sm:pb-24 lg:grid-cols-2 lg:items-stretch`}>
        <div>
          <Eyebrow>Visit or call</Eyebrow>
          <h2 className={`${h2} mt-3`}>Come see samples at the shop</h2>
          <dl className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {shopDetails.map(({ label, value, href }) => (
              <div key={label} className="grid grid-cols-[72px_1fr] items-center gap-3 px-4 py-4 sm:grid-cols-[88px_1fr] sm:gap-4 sm:px-5">
                <dt className="text-sm text-ink-muted">{label}</dt>
                <dd className="min-w-0 break-words font-medium sm:text-lg">
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="transition-colors hover:text-brand"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-line sm:min-h-[340px]">
          {/* Pattern shows while the map loads */}
          <div className="absolute inset-0">
            <MapPattern />
          </div>
          <iframe
            title={`Map showing ${site.name}`}
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 py-2.5 font-semibold text-ink shadow-[0_8px_24px_-10px_rgba(15,27,29,0.4)] transition-colors hover:text-brand"
          >
            <PinIcon className="h-4 w-4 text-coral" />
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  )
}

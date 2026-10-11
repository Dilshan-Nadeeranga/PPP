// Line illustrations for the home page (decorative; hidden from screen readers).

const INK = '#0f1b1d'
const BRAND = '#0b6e74'

function MirrorGradient({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f2f4f4" />
        <stop offset="0.45" stopColor="#a9b3b2" />
        <stop offset="1" stopColor="#6c7776" />
      </linearGradient>
    </defs>
  )
}

/** Hero: a four-pane window with dimension lines, plus a round mirror. */
export function HeroWindow() {
  return (
    <svg viewBox="0 0 520 420" className="h-full w-full" aria-hidden="true">
      <MirrorGradient id="hero-mirror" />
      {/* Glass */}
      <rect x="100" y="70" width="300" height="290" rx="6" fill="#e6f1f0" />
      <path d="M140 330 210 95M175 335 230 190M285 330 345 115" stroke="#fff" strokeWidth="11" strokeLinecap="round" />
      {/* Frame */}
      <rect x="100" y="70" width="300" height="290" rx="6" fill="none" stroke={INK} strokeWidth="5" />
      <path d="M250 70v290M100 215h300" stroke={INK} strokeWidth="5" />

      {/* Height dimension */}
      <path d="M70 70v290M58 70h24M58 360h24" stroke={BRAND} strokeWidth="3.5" />
      <rect x="40" y="200" width="60" height="30" rx="15" fill={BRAND} />
      <text x="70" y="221" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600" fontFamily="inherit">
        48 in
      </text>

      {/* Width dimension */}
      <path d="M100 390h300M100 378v24M400 378v24" stroke={BRAND} strokeWidth="3.5" />
      <rect x="215" y="375" width="70" height="30" rx="15" fill={BRAND} />
      <text x="250" y="396" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600" fontFamily="inherit">
        36 in
      </text>

      {/* Mirror */}
      <circle cx="430" cy="320" r="70" fill="url(#hero-mirror)" stroke={INK} strokeWidth="5" />
      <path d="M392 300a42 42 0 0 1 28-30" stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function GlassIllustration() {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      <MirrorGradient id="svc-mirror" />
      <rect x="62" y="20" width="62" height="112" rx="2" fill="#c9e3e2" stroke={BRAND} strokeWidth="3.5" />
      <path d="M76 116 102 44M88 124 108 76" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="155" cy="96" rx="33" ry="44" fill="url(#svc-mirror)" stroke={INK} strokeWidth="3.5" />
      <path d="M44 138h158" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function DoorIllustration() {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      <rect x="86" y="18" width="80" height="120" rx="3" fill="#e1e6e5" stroke={INK} strokeWidth="3.5" />
      <rect x="80" y="38" width="7" height="18" rx="1.5" fill={INK} />
      <rect x="80" y="100" width="7" height="18" rx="1.5" fill={INK} />
      <path d="M108 76h26" stroke={BRAND} strokeWidth="9" strokeLinecap="round" />
      <rect x="128" y="58" width="16" height="38" rx="8" fill={BRAND} />
      <path d="M68 142h106" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function PantryIllustration() {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      <rect x="74" y="18" width="92" height="120" rx="3" fill="#fff" stroke={INK} strokeWidth="3.5" />
      <rect x="80" y="24" width="38" height="108" rx="1" fill="#c9e3e2" />
      <rect x="122" y="24" width="38" height="108" rx="1" fill="#c9e3e2" />
      <path d="M86 40h26M128 40h26M86 116h26M128 116h26" stroke="#7d8a89" strokeWidth="2" />
      <path d="M112 68v20M128 68v20" stroke={BRAND} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M58 142h124" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function BoardsIllustration() {
  const sheet = (y: number, fill: string) => (
    <path d={`M120 ${y}l52 22-52 22-52-22z`} fill={fill} stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
  )
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      {sheet(74, '#e7c9a4')}
      {sheet(60, '#f0d9bb')}
      {sheet(46, '#fff7ee')}
    </svg>
  )
}

export function MapPattern() {
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="600" height="400" fill="#dbe9e8" />
      <g stroke="#fff" strokeWidth="22" fill="none">
        <path d="M95 -10 210 410M360 -10l80 420M-10 70l620 50M-10 290l620-130M-10 360l620-20" />
      </g>
    </svg>
  )
}

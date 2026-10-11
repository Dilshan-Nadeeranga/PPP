// Small stroke icon set (24x24, currentColor) used across the redesigned pages.
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  </Icon>
)

export const ChatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
  </Icon>
)

export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
)

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </Icon>
)

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)

export const ArrowUpRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
)

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
)

export const RulerIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m3.5 15.5 12-12 5 5-12 12z" />
    <path d="m7 12 2 2M10 9l2 2M13 6l2 2" />
  </Icon>
)

export const HomeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 10.5 12 4l8 6.5V20h-5v-6h-6v6H4z" />
  </Icon>
)

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
)

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
)

export const GridIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 4v16M4 12h16" />
  </Icon>
)

export const LockIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  </Icon>
)

export const CupboardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
    <path d="M12 3.5v17M10 10.5v3M14 10.5v3" />
  </Icon>
)

export const BoardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="4.5" width="17" height="11.5" rx="1.5" />
    <path d="M9 20h6M12 16v4" />
  </Icon>
)

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
)


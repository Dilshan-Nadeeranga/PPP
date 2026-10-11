import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prasanna Picture Palace',
  description: 'Welcome to Prasanna Picture Palace',
  icons: {
    icon: '/FullLogo.jpg',
    shortcut: '/FullLogo.jpg',
    apple: '/FullLogo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}

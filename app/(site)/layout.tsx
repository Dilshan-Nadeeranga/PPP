import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import { SiteProvider } from '@/components/SiteProvider'
import { getSite } from '@/lib/store'

// Public website pages: shop header, footer and the mobile Call/WhatsApp bar.
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const site = await getSite()
  return (
    <SiteProvider site={site}>
      <Navigation />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer site={site} />
      <MobileActionBar />
    </SiteProvider>
  )
}

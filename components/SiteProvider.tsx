'use client'

import { createContext, useContext } from 'react'
import type { Site } from '@/lib/site'

const SiteContext = createContext<Site | null>(null)

/** Makes the shop details (editable in the admin) available to client components. */
export function SiteProvider({ site, children }: { site: Site; children: React.ReactNode }) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>
}

export function useSite() {
  const site = useContext(SiteContext)
  if (!site) throw new Error('useSite must be used inside <SiteProvider>')
  return site
}

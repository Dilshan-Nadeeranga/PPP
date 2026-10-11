'use client'

import { useEffect, useState } from 'react'
import { whatsappLink } from '@/lib/site'
import { useSite } from './SiteProvider'
import { ChatIcon, PhoneIcon } from './icons'

const isTextField = (el: EventTarget | null) =>
  el instanceof HTMLElement && el.matches('input:not([type=radio]):not([type=checkbox]), textarea, select')

/** One-tap Call / WhatsApp bar fixed to the bottom of the screen on phones. */
export default function MobileActionBar() {
  const site = useSite()
  // Hide while typing so the bar doesn't sit on top of the on-screen keyboard
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => setTyping(isTextField(e.target))
    const onFocusOut = () => setTyping(false)
    document.addEventListener('focusin', onFocusIn)
    document.addEventListener('focusout', onFocusOut)
    return () => {
      document.removeEventListener('focusin', onFocusIn)
      document.removeEventListener('focusout', onFocusOut)
    }
  }, [])

  return (
    <>
      {/* Spacer so the fixed bar never covers the end of the page */}
      <div aria-hidden="true" className="h-[calc(76px+env(safe-area-inset-bottom))] bg-ink md:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pt-3 backdrop-blur transition-transform duration-200 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden ${
          typing ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-xl border border-line bg-white py-3 font-semibold text-ink active:bg-canvas"
          >
            <PhoneIcon className="h-5 w-5 text-brand" />
            Call
          </a>
          <a
            href={whatsappLink(site)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 font-semibold text-white active:opacity-90"
          >
            <ChatIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

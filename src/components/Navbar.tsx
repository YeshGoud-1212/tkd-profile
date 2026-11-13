import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../config/brand'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { isWhatsAppConfigured, whatsappLink, DEFAULT_PARTNER_TEXT } from '../lib/whatsapp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const wa = isWhatsAppConfigured()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-navy/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#top" aria-label="Rudra Taekwondo — home"><Logo /></a>
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm font-semibold text-slate-200 transition hover:text-energy">{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button href={wa ? whatsappLink(DEFAULT_PARTNER_TEXT) : '#contact'} external={wa} arrow={false} className="hidden !px-5 !py-2.5 !text-xs sm:inline-flex">Partner with us</Button>
          <button
            className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu" className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-slate-200 hover:bg-white/5">{n.label}</a>
                </li>
              ))}
              <li className="pt-2"><Button href={wa ? whatsappLink(DEFAULT_PARTNER_TEXT) : '#contact'} external={wa} onClick={() => setOpen(false)} className="w-full">Partner with us</Button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { Mail } from 'lucide-react'
import { Youtube } from './ui/BrandIcons'
import Logo from './ui/Logo'
import { brand, contact, nav } from '../config/brand'

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 font-display text-lg font-bold uppercase text-white">{brand.tagline}</p>
          <p className="mt-2 max-w-sm text-sm">{brand.message}</p>
          <div className="mt-5 flex gap-3">
            {contact.youtube && <a href={contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full bg-white/10 p-2.5 hover:bg-energy"><Youtube className="h-4 w-4" /></a>}
            {contact.email && <a href={`mailto:${contact.email}`} aria-label="Email" className="rounded-full bg-white/10 p-2.5 hover:bg-energy"><Mail className="h-4 w-4" /></a>}
          </div>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-energy">{n.label}</a></li>)}
            <li><a href="#contact" className="hover:text-energy">Contact</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">Programme</h2>
          <p className="mt-4 text-sm leading-relaxed">Independent Taekwondo coaching for children inside residential communities across {brand.region}.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
      </div>
    </footer>
  )
}

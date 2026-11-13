import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow, title, children, dark = false, center = false,
}: { eyebrow: string; title: string; children?: ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2 className={`mt-4 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {children && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-brand'}`}>{children}</p>}
    </Reveal>
  )
}

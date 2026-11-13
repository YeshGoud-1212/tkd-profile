import { ShieldCheck, Baby, Smile, Timer, Target, Home, FileSignature, Eye, Ban } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const items = [
  { icon: Baby, t: 'Progressive training suited to each student' },
  { icon: Smile, t: 'Beginner-friendly instruction' },
  { icon: Timer, t: 'Proper warm-up and cool-down' },
  { icon: Target, t: 'Technique before intensity' },
  { icon: Home, t: 'Safe training environments' },
  { icon: FileSignature, t: 'Parent consent and emergency contact information' },
  { icon: Eye, t: 'Appropriate supervision' },
  { icon: Ban, t: 'No premature or uncontrolled sparring' },
]

export default function Safety() {
  return (
    <section id="safety" className="section-y bg-slate-50">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Safety & responsible coaching" title="Children's safety comes first.">
            Parents and committees should feel completely comfortable. These are the principles every session is built on.
          </SectionHeading>
          <Reveal delay={0.1}>
            <div className="mt-8 grid h-24 w-24 place-items-center rounded-3xl bg-navy text-energy shadow-soft"><ShieldCheck className="h-12 w-12" aria-hidden /></div>
          </Reveal>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 0.06}>
              <li className="flex h-full items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-energy">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-energy-soft text-energy"><it.icon className="h-5 w-5" aria-hidden /></span>
                <span className="font-semibold leading-snug">{it.t}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { BadgeCheck, Medal, Globe2, Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import ImageSlot from './ui/ImageSlot'
import { coach, media } from '../config/brand'

const stats = [
  { icon: BadgeCheck, big: '9 yrs', small: 'of Taekwondo' },
  { icon: Medal, big: '1st Dan', small: 'Black Belt' },
  { icon: Medal, big: 'National', small: 'Medallist' },
  { icon: Globe2, big: 'G1-level', small: 'International tournament' },
]

export default function CoachProfile() {
  return (
    <section id="coach" className="section-y bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal y={40}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-energy" aria-hidden />
            <ImageSlot src={media.coach} alt={`${coach.name}, Taekwondo coach`} hint="public/media/coach.png" className="relative aspect-[4/5] w-full rounded-[2rem] shadow-soft" />
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-navy p-4 text-white shadow-2xl sm:left-auto sm:right-[-1rem] sm:max-w-[16rem]">
              <p className="font-display text-sm font-bold uppercase tracking-wide">{coach.name}</p>
              <p className="mt-1 text-xs text-energy">Taekwondo Coach &amp; Referee</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Meet the coach" title="Learn from experience. Train with purpose." />
          <Reveal delay={0.1}>
            <h3 className="mt-8 text-2xl font-extrabold uppercase">{coach.name}</h3>
            <p className="mt-1 font-semibold text-energy">{coach.title}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.big + s.small} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <s.icon className="h-5 w-5 text-energy" aria-hidden />
                  <div className="mt-2 font-display text-lg font-extrabold leading-tight">{s.big}</div>
                  <div className="text-xs text-slate-brand">{s.small}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-7 grid gap-2.5 text-[15px] sm:grid-cols-1">
              {coach.credentials.map((c) => (
                <li key={c} className="flex gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-energy" aria-hidden />{c}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <blockquote className="relative mt-9 rounded-2xl bg-navy p-7 text-slate-200">
              <Quote className="absolute right-5 top-5 h-10 w-10 text-energy/30" aria-hidden />
              <p className="relative leading-relaxed">“{coach.quote}”</p>
              <footer className="mt-4 text-sm font-bold text-energy">— {coach.name}</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

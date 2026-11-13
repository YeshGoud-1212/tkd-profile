import { motion, useReducedMotion } from 'framer-motion'
import { Award, ShieldCheck, MapPin, ChevronDown } from 'lucide-react'
import Button from './ui/Button'
import ImageSlot from './ui/ImageSlot'
import { media, brand, coach } from '../config/brand'
import { isWhatsAppConfigured, whatsappLink, DEFAULT_PARTNER_TEXT } from '../lib/whatsapp'

export default function Hero() {
  const reduce = useReducedMotion()
  const wa = isWhatsAppConfigured()
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30 } as const,
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy text-white">
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -right-48 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent" />

      <div className="container-x grid min-h-[100svh] items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-16 lg:pt-24">
        <div className="relative z-10">
          <motion.span {...fade(0.05)} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            <MapPin className="h-4 w-4 text-energy" aria-hidden />
            Taekwondo coaching · {brand.region}
          </motion.span>

          <motion.h1 {...fade(0.15)} className="mt-6 max-w-3xl font-display text-[clamp(3.1rem,7.2vw,6.6rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]">
            Bring
            <br />
            Taekwondo
            <br />
            <span className="text-white/80">to your</span>
            <br />
            community<span className="text-energy">.</span>
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-7 border-l-4 border-energy pl-4 font-display text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
            Build strength. <span className="text-energy">Build confidence.</span>
          </motion.p>

          <motion.p {...fade(0.35)} className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Introduce structured Taekwondo coaching to your residential community and give children an opportunity to grow stronger, more confident and disciplined through martial arts.
          </motion.p>

          <motion.div {...fade(0.45)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={wa ? whatsappLink(DEFAULT_PARTNER_TEXT) : '#partner'} external={wa}>Explore community partnership</Button>
            <Button href="#coach" variant="ghost">Meet your coach</Button>
          </motion.div>

          <motion.div {...fade(0.6)} className="mt-9 flex max-w-xl items-start gap-3 text-sm text-slate-300">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-energy" aria-hidden />
            <p>
              <strong className="text-white">{coach.name}</strong> — 1st Dan Black Belt, National Medallist.
              We bring the coach, curriculum and programme; your community provides the space.
            </p>
          </motion.div>
        </div>

        <motion.div {...fade(0.3)} className="relative mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="rounded-[2rem] border-[8px] border-[#4B3024] bg-[#4B3024] p-1.5 shadow-2xl shadow-black/30 sm:rounded-[2.5rem] sm:border-[10px] sm:p-2">
            <ImageSlot
              src={media.hero}
              alt="Children practising Taekwondo with their coach"
              hint="public/media/hero.jpg"
              eager
              className="aspect-[16/10] w-full rounded-[1.4rem] sm:rounded-[1.8rem]"
              imgClassName="rounded-[1.4rem] sm:rounded-[1.8rem]"
            />
          </div>
          <div className="absolute -left-2 top-8 flex items-center gap-3 rounded-2xl border border-slate-500 bg-navy-800 px-4 py-3 shadow-xl sm:-left-8 sm:top-1/4 sm:px-5 sm:py-4">
            <Award className="h-7 w-7 shrink-0 text-energy" aria-hidden />
            <span className="text-[0.65rem] font-bold uppercase leading-relaxed tracking-[0.16em] text-white sm:text-xs">
              National
              <br />
              Medallist Coach
            </span>
          </div>
          <span aria-hidden className="absolute -bottom-5 right-4 hidden text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400 [writing-mode:vertical-rl] lg:block">
            RUDRA · {brand.region}
          </span>
        </motion.div>
      </div>

      <a href="#why" aria-label="Scroll to next section" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-energy lg:block">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  )
}

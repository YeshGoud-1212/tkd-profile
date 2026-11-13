import { Footprints, ShieldHalf, Flame, HeartPulse, Award } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const parts = [
  { icon: Footprints, title: 'Taekwondo Skills Development', points: ['Taekwondo stances, movements and techniques', 'Kicks and hand techniques', 'Balance, posture and coordination'] },
  { icon: ShieldHalf, title: 'Self-Defence Training', points: ['Self-defence awareness', 'Defensive movements', 'Understanding distance and personal boundaries', 'Confidence in responding to uncomfortable situations', 'Emphasis on prevention, awareness and responsible use of techniques'] },
  { icon: Flame, title: 'Strength & Physical Fitness', points: ['Progressive strength development', 'Stamina and endurance', 'Flexibility and mobility', 'Balance, agility and coordination', 'Overall physical conditioning'] },
  { icon: HeartPulse, title: 'Active Wellness', points: ['Encouraging regular physical activity', 'Building healthy movement habits', 'Developing consistency and discipline', 'Promoting an active lifestyle beyond screen-based entertainment'] },
]

export default function TrainingProgram() {
  return (
    <section id="program" className="section-y relative overflow-hidden bg-navy text-white">
      <div className="grain absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-energy/10 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading dark eyebrow="Our Training Program" title="Training for strength, skill and confidence.">
            A comprehensive programme that builds Taekwondo skills, self-defence awareness, fitness and wellness. Training progresses according to each student's development, readiness and performance.
          </SectionHeading>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {parts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-300 hover:border-energy/60 hover:bg-white/[0.07]">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-energy/15 text-energy transition group-hover:bg-energy group-hover:text-white"><p.icon className="h-6 w-6" aria-hidden /></span>
                  <h3 className="text-lg font-bold uppercase">{p.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-slate-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-energy" aria-hidden />{pt}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Signature feature */}
        <Reveal>
          <article className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-energy to-energy-dark p-8 shadow-glow sm:p-12">
            <Award className="absolute -right-6 -top-6 h-52 w-52 text-white/10" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Signature feature</span>
                <h3 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Belt progression &amp; competitions</h3>
              </div>
              <div>
                <ul className="grid gap-3 sm:grid-cols-1">
                  {['Structured skill development towards belt examinations', 'Certified belt promotions through the appropriate authorised Taekwondo examination and certification structure', 'Opportunities to participate in school-level Taekwondo competitions and other suitable tournaments', 'Competition preparation and guidance based on student readiness'].map((t) => (
                    <li key={t} className="flex gap-3 font-medium"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

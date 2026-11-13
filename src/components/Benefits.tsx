import { Dumbbell, Focus, Mountain, HandHeart } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const items = [
  { icon: Dumbbell, title: 'Physical Fitness', text: 'Build strength, stamina, flexibility and coordination.', tone: 'bg-navy text-white', icon_c: 'bg-energy text-white', sub: 'text-slate-300' },
  { icon: Focus, title: 'Focus & Concentration', text: 'Develop attention, patience and the ability to follow instructions.', tone: 'bg-white text-navy ring-1 ring-slate-200', icon_c: 'bg-navy text-energy', sub: 'text-slate-brand' },
  { icon: Mountain, title: 'Confidence & Resilience', text: 'Encourage children to overcome challenges and believe in their abilities.', tone: 'bg-energy text-white', icon_c: 'bg-white text-energy', sub: 'text-white/90' },
  { icon: HandHeart, title: 'Discipline & Respect', text: 'Develop consistency, self-control, perseverance and respect for others.', tone: 'bg-white text-navy ring-1 ring-slate-200', icon_c: 'bg-energy-soft text-energy', sub: 'text-slate-brand' },
]

export default function Benefits() {
  return (
    <section id="why" className="section-y bg-slate-50">
      <div className="container-x">
        <SectionHeading eyebrow="Why Taekwondo?" title="More than just a sport.">
          Childhood is the foundation for lifelong habits. Taekwondo helps children develop both physically and mentally through consistent training.
        </SectionHeading>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <article className={`group relative h-full overflow-hidden rounded-3xl p-7 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${it.tone}`}>
                <span className="absolute -right-6 -top-6 font-display text-[7rem] font-extrabold leading-none opacity-[0.06]">{i + 1}</span>
                <span className={`grid h-14 w-14 place-items-center rounded-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${it.icon_c}`}>
                  <it.icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-8 text-xl font-bold uppercase leading-tight">{it.title}</h3>
                <p className={`mt-3 leading-relaxed ${it.sub}`}>{it.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

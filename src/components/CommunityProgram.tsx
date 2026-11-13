import { Handshake, ClipboardList, TrendingUp } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import ImageSlot from './ui/ImageSlot'
import { media } from '../config/brand'

const steps = [
  { n: '01', icon: Handshake, title: 'Community Partnership', text: 'We coordinate with the apartment association or community management to establish a suitable training arrangement.' },
  { n: '02', icon: ClipboardList, title: 'Structured Training', text: 'We organise regular coaching sessions with progressive training and individual attention.' },
  { n: '03', icon: TrendingUp, title: 'Consistent Development', text: 'Children develop Taekwondo skills, improve their techniques and build physical ability through regular practice.' },
]

export default function CommunityProgram() {
  return (
    <section id="community" className="section-y bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="The Rudra Community Program" title="Your community. Your training space. Their growth.">
            RUDRA TAEKWONDO brings structured martial arts training closer to home by conducting dedicated coaching batches within residential communities.
          </SectionHeading>
          <ol className="relative mt-10 space-y-8 border-l-2 border-dashed border-slate-200 pl-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <li className="relative">
                  <span className="absolute -left-[3.2rem] grid h-10 w-10 place-items-center rounded-full bg-navy font-display text-sm font-bold text-energy ring-4 ring-white">{s.n}</span>
                  <h3 className="flex items-center gap-2 text-lg font-bold uppercase"><s.icon className="h-5 w-5 text-energy" aria-hidden />{s.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate-brand">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal y={40}>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-energy/15" aria-hidden />
            <ImageSlot src={media.clubhouse} alt="Children training together in the community program" hint="public/media/clubhouse.jfif" className="relative aspect-[4/5] w-full rounded-[2rem] shadow-soft sm:aspect-[5/5]" />
            <div className="absolute -bottom-6 right-4 max-w-[17rem] rounded-2xl bg-navy p-5 text-sm leading-relaxed text-slate-200 shadow-2xl sm:right-[-1.5rem]">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-energy">The model in one line</p>
              <p className="mt-2">We bring the coach, curriculum and programme. Your community provides the space and resident coordination.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

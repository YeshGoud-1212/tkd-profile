import { Home, Smile, Footprints, UserCheck, Baby, Award, CalendarCheck, Users, Check, Briefcase, KeyRound } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const benefits = [
  { icon: Home, t: 'Convenient training within the residential premises' },
  { icon: Smile, t: 'An engaging extracurricular activity for resident children' },
  { icon: Footprints, t: 'Regular physical activity beyond screen-based entertainment' },
  { icon: UserCheck, t: 'Dedicated and structured coaching' },
  { icon: Baby, t: 'Progressive, student-focused training' },
  { icon: Award, t: 'Opportunities for certified belt progression and competition participation' },
  { icon: CalendarCheck, t: 'Parent-friendly scheduling and communication' },
  { icon: Users, t: 'A positive community activity that encourages participation' },
]
const bring = ['Coaching and session planning', 'Structured training curriculum', 'Batch coordination', 'Student progress tracking', 'Parent communication', 'Safety-conscious training practices', 'Guidance for belt examinations and suitable competitions']
const need = ['Access to a suitable multipurpose hall or safe training area', 'A mutually agreed weekly schedule', 'Permission and support from the association or management', 'Assistance communicating the programme to interested residents']

export default function CommunityPartnership() {
  return (
    <section id="partner" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading eyebrow="Why partner with Rudra?" title="A valuable addition to your community.">
          Built for association committees: a clear arrangement, a qualified coach and a programme residents can easily take part in.
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={(i % 4) * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                <b.icon className="h-6 w-6 shrink-0 text-energy" aria-hidden />
                <p className="text-[15px] font-semibold leading-snug">{b.t}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-navy p-8 text-white sm:p-10">
              <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase"><Briefcase className="h-6 w-6 text-energy" aria-hidden />What we bring</h3>
              <ul className="mt-6 space-y-3">
                {bring.map((x) => <li key={x} className="flex gap-3 text-slate-200"><Check className="mt-0.5 h-5 w-5 shrink-0 text-energy" aria-hidden />{x}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border-2 border-dashed border-energy/50 bg-energy-soft/40 p-8 sm:p-10">
              <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase"><KeyRound className="h-6 w-6 text-energy" aria-hidden />What we need from your community</h3>
              <ul className="mt-6 space-y-3">
                {need.map((x) => <li key={x} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-energy" aria-hidden />{x}</li>)}
              </ul>
              <p className="mt-6 text-sm text-slate-brand">Schedules, arrangements and membership details are agreed together, in a way that works for your residents.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

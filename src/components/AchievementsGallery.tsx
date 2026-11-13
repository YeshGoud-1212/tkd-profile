import { useState, type ComponentType } from 'react'
import { Newspaper, ZoomIn, Award, Play } from 'lucide-react'
import { Instagram } from './ui/BrandIcons'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import ImageSlot from './ui/ImageSlot'
import Lightbox from './ui/Lightbox'
import { media, achievements } from '../config/brand'
import { useImageOk } from '../lib/useImageOk'

export default function AchievementsGallery() {
  const [box, setBox] = useState<{ src: string; alt: string } | null>(null)
  const paperOk = useImageOk(media.newspaper)
  const certOk = useImageOk(media.certificate)

  return (
    <section id="recognition" className="section-y relative overflow-hidden bg-slate-50">
      <div className="container-x">
        <SectionHeading eyebrow="Achievements & Recognition" title="The journey. The achievements. The recognition.">
          Every achievement represents years of dedication, discipline and commitment to Taekwondo.
        </SectionHeading>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* NEWSPAPER — editorial clipping */}
          <Reveal className="lg:col-span-7">
            <article>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[1.5deg] bg-slate-300/60" aria-hidden />
                <button
                  type="button" disabled={!paperOk}
                  onClick={() => setBox({ src: media.newspaper, alt: 'Newspaper feature on Yeshwanth Goud V.' })}
                  aria-label="Enlarge newspaper feature"
                  className="group relative block w-full -rotate-[0.8deg] border border-slate-300 bg-[#f6f1e6] p-3 text-left shadow-soft transition duration-500 enabled:hover:rotate-0 enabled:cursor-zoom-in sm:p-5"
                >
                  <div className="mb-3 flex items-center justify-between border-b-2 border-double border-navy/60 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">
                    <span>In the press</span><span>Print feature</span>
                  </div>
                  <div className="relative overflow-hidden">
                    <ImageSlot src={media.newspaper} alt="Newspaper feature on Yeshwanth Goud V." hint="public/media/newspaper.jpg" dark={false} className="aspect-[4/3] w-full sepia-[0.15] transition duration-500 group-hover:scale-[1.02]" />
                    {paperOk && <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1.5 text-xs font-bold text-white"><ZoomIn className="h-3.5 w-3.5" aria-hidden />Enlarge</span>}
                  </div>
                  {(achievements.newspaperHeadline || achievements.newspaperCredit) && (
                    <div className="mt-3 font-serif">
                      {achievements.newspaperHeadline && <p className="text-lg font-bold leading-snug text-navy">{achievements.newspaperHeadline}</p>}
                      {achievements.newspaperCredit && <p className="text-xs uppercase tracking-wider text-navy/60">{achievements.newspaperCredit}</p>}
                    </div>
                  )}
                </button>
              </div>
              <Caption icon={Newspaper} title="Newspaper recognition" text="Featured in print media for achievements and contributions in Taekwondo." />
            </article>
          </Reveal>

          {/* Student Tribe reel preview */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <article className="flex h-full flex-col items-center">
              <a
                href={achievements.reelUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch the Student Tribe feature on Instagram"
                className="block w-full max-w-[17rem] rounded-[2.2rem] bg-navy p-2.5 shadow-2xl ring-1 ring-white/10 transition hover:-translate-y-1 focus-visible:outline-energy"
              >
                <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
                  <ImageSlot src={media.reelThumb} alt="Student Tribe Instagram reel thumbnail" hint="public/media/reel-thumb.jpeg" className="aspect-[9/16] w-full" />
                  <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/70 to-transparent p-3 text-white">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]"><span className="grid h-full w-full place-items-center rounded-full bg-navy"><Instagram className="h-4 w-4" aria-hidden /></span></span>
                    <span className="text-xs font-bold">Student Tribe</span>
                    <span className="ml-auto rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold">REEL</span>
                  </div>
                  <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/25 text-white backdrop-blur"><Play className="h-6 w-6 translate-x-0.5 fill-white" aria-hidden /></span>
                </div>
              </a>
              <div className="mt-6 w-full max-w-sm text-center lg:text-left">
                <Caption icon={Instagram} title="Student Tribe feature" text="An opportunity to share my Taekwondo journey and inspire fellow college students to pursue sports, fitness and discipline." />
              </div>
            </article>
          </Reveal>

          {/* CERTIFICATE — credential showcase */}
          <Reveal delay={0.05} className="lg:col-span-12">
            <article className="relative overflow-hidden rounded-[2rem] bg-navy p-6 text-white shadow-soft sm:p-10">
              <div className="grain absolute inset-0 opacity-50" aria-hidden />
              <Award className="absolute -bottom-10 -left-10 h-56 w-56 text-white/[0.04]" aria-hidden />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-energy/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-energy"><Award className="h-4 w-4" aria-hidden />Official credential</span>
                  <h3 className="mt-5 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Black belt <span className="text-energy">certification</span></h3>
                  <p className="mt-4 max-w-md leading-relaxed text-slate-300">1st Dan Black Belt — a milestone reflecting years of commitment, training and dedication.</p>
                  <button type="button" disabled={!certOk} onClick={() => setBox({ src: media.certificate, alt: '1st Dan Black Belt certificate' })} className="mt-6 inline-flex items-center gap-2 rounded-full bg-energy px-5 py-3 text-sm font-bold text-white transition enabled:hover:bg-energy-dark disabled:opacity-50">
                    <ZoomIn className="h-4 w-4" aria-hidden />{certOk ? 'View certificate' : 'Certificate image coming soon'}
                  </button>
                </div>
                <button
                  type="button" disabled={!certOk} aria-label="Enlarge black belt certificate"
                  onClick={() => setBox({ src: media.certificate, alt: '1st Dan Black Belt certificate' })}
                  className="group relative rounded-sm bg-gradient-to-br from-amber-200 via-amber-500 to-amber-200 p-[6px] shadow-2xl transition duration-500 enabled:cursor-zoom-in enabled:hover:scale-[1.02]"
                >
                  <div className="bg-white p-2">
                    <ImageSlot src={media.certificate} alt="1st Dan Black Belt certificate" hint="public/media/certificate.jpeg" dark={false} imgClassName="object-contain" className="aspect-[4/3] w-full" />
                  </div>
                </button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
      <Lightbox src={box?.src ?? null} alt={box?.alt ?? ''} onClose={() => setBox(null)} />
    </section>
  )
}

function Caption({ icon: Icon, title, text }: { icon: ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="mt-7 flex gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy-soft text-energy"><Icon className="h-5 w-5" aria-hidden /></span>
      <div className="text-left">
        <h3 className="font-bold uppercase tracking-wide">{title}</h3>
        <p className="mt-1 text-slate-brand">{text}</p>
      </div>
    </div>
  )
}

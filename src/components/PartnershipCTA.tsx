import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { isWhatsAppConfigured, whatsappLink, DEFAULT_PARTNER_TEXT, DEFAULT_DEMO_TEXT } from '../lib/whatsapp'

/** Buttons go to WhatsApp when a number is configured, otherwise to the enquiry form. */
export default function PartnershipCTA() {
  const wa = isWhatsAppConfigured()
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-energy via-energy to-energy-dark py-24 text-white sm:py-32">
      <div className="grain absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="absolute -left-20 -top-20 -z-10 h-96 w-96 rounded-full border-[40px] border-white/10" aria-hidden />
      <div className="absolute -bottom-32 right-0 -z-10 h-[28rem] w-72 -skew-x-[14deg] bg-navy/90" aria-hidden />
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl">Let's build a stronger community.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Give the children in your residential community an opportunity to discover the strength, confidence and discipline that Taekwondo can develop.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="dark" href={wa ? whatsappLink(DEFAULT_PARTNER_TEXT) : '#contact'} external={wa}>Start a community partnership</Button>
            <Button variant="ghost" href={wa ? whatsappLink(DEFAULT_DEMO_TEXT) : '#contact'} external={wa} className="!border-white/60">Request an introductory demo</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

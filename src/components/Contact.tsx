import { useState, type ComponentType, type FormEvent } from 'react'
import { MessageCircle, Mail, Phone, Building2, Users, AlertTriangle, Send } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { contact, brand } from '../config/brand'
import { isWhatsAppConfigured, whatsappLink, DEFAULT_PARTNER_TEXT, DEFAULT_DEMO_TEXT } from '../lib/whatsapp'

type Field = { name: string; label: string; type?: 'text' | 'tel' | 'textarea'; required?: boolean; placeholder?: string }
type Path = 'community' | 'parent'

const forms: Record<Path, { title: string; intro: string; fields: Field[]; subject: string }> = {
  community: {
    title: 'Residential community partnership',
    intro: 'For apartment association representatives, RWA members and community managers.',
    subject: 'Community partnership enquiry',
    fields: [
      { name: 'name', label: 'Your name', required: true },
      { name: 'community', label: 'Community / Apartment name', required: true },
      { name: 'location', label: 'Location in Hyderabad', required: true, placeholder: 'e.g. area / locality' },
      { name: 'role', label: 'Your role in the community', required: true, placeholder: 'e.g. Secretary, Clubhouse manager' },
      { name: 'phone', label: 'Phone number', type: 'tel', required: true },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Anything you would like us to know (optional)' },
    ],
  },
  parent: {
    title: 'Parent enquiry',
    intro: 'For parents interested in enrolling their children.',
    subject: 'Parent enquiry',
    fields: [
      { name: 'name', label: 'Parent name', required: true },
      { name: 'phone', label: 'Phone number', type: 'tel', required: true },
      { name: 'community', label: 'Community name', required: true },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Optional' },
    ],
  },
}

function validate(path: Path, v: Record<string, string>) {
  const e: Record<string, string> = {}
  for (const f of forms[path].fields) {
    const val = (v[f.name] ?? '').trim()
    if (f.required && !val) e[f.name] = 'This field is required'
  }
  if (v.phone && !/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, '').replace(/^(\+?91)(\d{10})$/, '$1$2'))) e.phone = 'Enter a valid 10-digit Indian mobile number'
  return e
}

export default function Contact() {
  const [path, setPath] = useState<Path>('community')
  const [values, setValues] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'opened' | 'unconfigured'>('idle')
  const waOk = isWhatsAppConfigured()
  const cfg = forms[path]

  const switchPath = (p: Path) => { setPath(p); setValues({}); setErrors({}); setStatus('idle') }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const errs = validate(path, values)
    setErrors(errs)
    if (Object.keys(errs).length) return
    if (!waOk) { setStatus('unconfigured'); return }
    const lines = [
      `*${brand.fullName} — ${cfg.subject}*`,
      ...(path === 'community' ? [DEFAULT_PARTNER_TEXT] : []),
      ...cfg.fields.filter((f) => values[f.name]?.trim()).map((f) => `${f.label}: ${values[f.name].trim()}`),
    ]
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    setStatus('opened')
  }

  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading eyebrow="Contact & enquiry" title="Let's talk about your community.">
          Choose the option that fits you. Your details are sent to the coach on WhatsApp, so you can continue the conversation directly.
        </SectionHeading>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200 sm:p-8">
              <div role="tablist" aria-label="Enquiry type" className="grid grid-cols-2 gap-2 rounded-2xl bg-white p-1.5 ring-1 ring-slate-200">
                {([['community', 'Community / RWA', Building2], ['parent', 'Parent', Users]] as const).map(([k, label, Icon]) => (
                  <button
                    key={k} role="tab" type="button" aria-selected={path === k} onClick={() => switchPath(k)}
                    className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition ${path === k ? 'bg-navy text-white shadow' : 'text-slate-brand hover:text-navy'}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden />{label}
                  </button>
                ))}
              </div>

              <h3 className="mt-7 text-xl font-extrabold uppercase">{cfg.title}</h3>
              <p className="mt-1 text-slate-brand">{cfg.intro}</p>

              <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2" key={path}>
                {cfg.fields.map((f) => {
                  const id = `${path}-${f.name}`
                  const err = errors[f.name]
                  const base = `w-full rounded-xl border bg-white px-4 py-3 text-[15px] outline-none transition focus:border-energy focus:ring-4 focus:ring-energy/20 ${err ? 'border-red-500' : 'border-slate-300'}`
                  return (
                    <div key={id} className={f.type === 'textarea' ? 'sm:col-span-2' : ''}>
                      <label htmlFor={id} className="mb-1.5 block text-sm font-bold">{f.label}{f.required && <span className="text-energy" aria-hidden> *</span>}</label>
                      {f.type === 'textarea' ? (
                        <textarea id={id} rows={4} className={base} placeholder={f.placeholder} value={values[f.name] ?? ''} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })} />
                      ) : (
                        <input
                          id={id} name={f.name} type={f.type ?? 'text'} inputMode={f.type === 'tel' ? 'tel' : undefined}
                          autoComplete={f.name === 'name' ? 'name' : f.type === 'tel' ? 'tel' : 'off'}
                          required={f.required} aria-required={f.required} aria-invalid={Boolean(err)} aria-describedby={err ? `${id}-err` : undefined}
                          placeholder={f.placeholder} className={base} value={values[f.name] ?? ''} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
                        />
                      )}
                      {err && <p id={`${id}-err`} role="alert" className="mt-1 text-sm font-semibold text-red-600">{err}</p>}
                    </div>
                  )
                })}
                <div className="sm:col-span-2">
                  <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-energy px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-energy-dark sm:w-auto">
                    <Send className="h-4 w-4" aria-hidden />Send enquiry via WhatsApp
                  </button>
                  <div aria-live="polite" className="mt-4">
                    {status === 'opened' && (
                      <p className="rounded-xl bg-navy p-4 text-sm text-slate-200">
                        WhatsApp has opened with your details filled in. <strong className="text-white">Please press Send in WhatsApp</strong> — your enquiry reaches us only once you do.
                      </p>
                    )}
                    {status === 'unconfigured' && (
                      <p className="flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                        <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
                        <span><strong>Your enquiry has not been sent.</strong> The WhatsApp number has not been configured on this site yet (set <code>contact.whatsappNumber</code> in <code>src/config/brand.ts</code>).</span>
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="flex h-full flex-col rounded-3xl bg-navy p-8 text-white">
              <h3 className="text-xl font-extrabold uppercase">Prefer to chat directly?</h3>
              <p className="mt-2 text-slate-300">Message the coach on WhatsApp — the quickest way to ask about a demo session.</p>
              <a
                href={waOk ? whatsappLink(DEFAULT_DEMO_TEXT) : '#contact'}
                {...(waOk ? { target: '_blank', rel: 'noopener noreferrer' } : { onClick: (e) => { e.preventDefault(); setStatus('unconfigured') } })}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-navy transition hover:-translate-y-0.5 hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />Chat on WhatsApp
              </a>
              {!waOk && <p className="mt-2 text-xs text-amber-300">WhatsApp number not configured yet.</p>}

              <ul className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
                <ContactRow icon={Phone} label="Phone" value={contact.phoneDisplay} href={contact.phoneDisplay ? `tel:${contact.phoneDisplay.replace(/\s/g, '')}` : ''} />
                <ContactRow icon={Mail} label="Email" value={contact.email} href={contact.email ? `mailto:${contact.email}` : ''} />
              </ul>
              <p className="mt-auto pt-8 text-xs text-slate-400">Serving residential communities across {brand.region}.</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }: { icon: ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-energy"><Icon className="h-4 w-4" aria-hidden /></span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-slate-400">{label}</span>
        {value ? <a href={href} className="font-semibold hover:text-energy">{value}</a> : <span className="text-slate-500">To be added</span>}
      </span>
    </li>
  )
}

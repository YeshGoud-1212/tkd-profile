import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'ghost' | 'ghostDark' | 'dark'

const styles: Record<Variant, string> = {
  primary: 'bg-energy text-white shadow-glow hover:bg-energy-dark',
  dark: 'bg-navy text-white hover:bg-navy-700',
  ghost: 'border border-white/30 text-white hover:bg-white/10 hover:border-white/60',
  ghostDark: 'border border-navy/20 text-navy hover:bg-navy/5 hover:border-navy/40',
}

interface Props {
  href: string
  children: ReactNode
  variant?: Variant
  arrow?: boolean
  external?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({ href, children, variant = 'primary', arrow = true, external, className = '', onClick }: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
    </a>
  )
}

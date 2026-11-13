import { ImagePlus } from 'lucide-react'
import { useImageOk } from '../../lib/useImageOk'

interface Props {
  src: string
  alt: string
  /** Shown inside the placeholder so you know which file belongs here. */
  hint: string
  className?: string
  imgClassName?: string
  eager?: boolean
  dark?: boolean
}

/** Renders the real image if it exists, otherwise a tasteful placeholder. */
export default function ImageSlot({ src, alt, hint, className = '', imgClassName = '', eager, dark = true }: Props) {
  const ok = useImageOk(src)
  if (ok) {
    return (
      <img
        src={src} alt={alt}
        loading={eager ? 'eager' : 'lazy'} decoding="async"
        className={`${className} ${imgClassName} object-cover`}
      />
    )
  }
  return (
    <div
      role="img" aria-label={`${alt} (placeholder)`}
      className={`${className} relative flex items-center justify-center overflow-hidden ${
        dark ? 'bg-gradient-to-br from-navy-700 via-navy-800 to-navy' : 'bg-gradient-to-br from-slate-100 to-slate-200'
      }`}
    >
      <div className="grain absolute inset-0 opacity-60" />
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[18px] border-energy/20" />
      <div className={`relative flex flex-col items-center gap-2 px-4 text-center text-xs font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        <ImagePlus className="h-6 w-6 text-energy" aria-hidden />
        <span>Add photo</span>
        <code className="rounded bg-black/20 px-2 py-0.5 text-[10px] font-medium">{hint}</code>
      </div>
    </div>
  )
}

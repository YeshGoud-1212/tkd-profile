import { useImageOk } from '../../lib/useImageOk'
import { media } from '../../config/brand'

export default function Logo({ light = true }: { light?: boolean }) {
  const ok = useImageOk(media.logo)
  if (ok) {
    return (
      <span className="flex items-center gap-2.5">
        <img src={media.logo} alt="" className="h-11 w-11 rounded-lg bg-white object-contain p-0.5" />
        <span className={`font-display text-lg font-extrabold leading-none tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          RUDRA
          <span className="block text-[9px] font-semibold tracking-[0.35em] text-energy">TAEKWONDO</span>
        </span>
      </span>
    )
  }
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-energy shadow-glow">
        <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden><text x="32" y="48" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="800" fill="#fff">R</text></svg>
      </span>
      <span className={`font-display text-lg font-extrabold leading-none tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        RUDRA
        <span className="block text-[9px] font-semibold tracking-[0.35em] text-energy">TAEKWONDO</span>
      </span>
    </span>
  )
}

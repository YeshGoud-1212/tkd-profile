import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function Lightbox({ src, alt, onClose }: { src: string | null; alt: string; onClose: () => void }) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [src, onClose])

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          role="dialog" aria-modal="true" aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose} aria-label="Close enlarged image"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-energy"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            src={src} alt={alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

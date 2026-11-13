import { useEffect, useState } from 'react'

/** true only when the image at `src` actually loads. */
export function useImageOk(src?: string): boolean {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    if (!src) return setOk(false)
    let live = true
    const img = new Image()
    img.onload = () => live && setOk(true)
    img.onerror = () => live && setOk(false)
    img.src = src
    return () => { live = false }
  }, [src])
  return ok
}

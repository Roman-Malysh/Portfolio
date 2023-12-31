import { useEffect, useMemo, useState, RefObject } from 'react'

export default function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    return () => observer.disconnect()
    }
  }, [])

  return isIntersecting
}

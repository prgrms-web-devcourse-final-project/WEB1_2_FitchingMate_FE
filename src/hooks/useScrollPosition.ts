// useScrollPosition.ts
import { useEffect, useRef } from 'react'

const useScrollPosition = (key: string) => {
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, '0')
    }

    const handleScroll = () => {
      sessionStorage.setItem(key, String(element.scrollTop))
    }

    element.addEventListener('scroll', handleScroll)

    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [key])

  const restoreScrollPosition = () => {
    const element = elementRef.current
    if (!element) return

    const savedScrollPosition = sessionStorage.getItem(key)
    if (savedScrollPosition) {
      element.scrollTo(0, Number(savedScrollPosition))
    }
  }

  return { elementRef, restoreScrollPosition }
}

export default useScrollPosition
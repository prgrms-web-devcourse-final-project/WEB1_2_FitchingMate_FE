import { useRef } from 'react'

export const useTopRef = () => {
  const topRef = useRef<HTMLDivElement>(null)

  const handleUpButtonClick = () => {
    topRef.current?.scrollIntoView({
      // behavior: 'smooth',
    })
  }

  return { topRef, handleUpButtonClick }
}

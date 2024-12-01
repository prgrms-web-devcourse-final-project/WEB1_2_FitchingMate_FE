import { useEffect, useRef, useState } from 'react'

const useDropdownMenu = () => {
  const [dropMenuState, setDropMenuState] = useState<boolean>(false)
  const dropMenuRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (dropMenuState && !dropMenuRef.current?.contains(e.target)) {
        setDropMenuState(false)
      }
    }
    document.addEventListener('click', handleOutsideClose)
    return () => document.removeEventListener('click', handleOutsideClose)
  }, [dropMenuState])

  return {
    dropMenuState,
    setDropMenuState,
    dropMenuRef,
  }
}

export default useDropdownMenu

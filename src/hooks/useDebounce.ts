import { useEffect, useState } from 'react'

type UseDebounce<T> = (value: T, delay: number) => T

const useDebounce: UseDebounce<string> = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value])

  return debounceValue
}

export default useDebounce

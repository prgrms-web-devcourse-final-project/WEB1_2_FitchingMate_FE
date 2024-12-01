import { useState } from 'react'

const useInput = (validateValue: (value: string) => boolean) => {
  const [value, setValue] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const enteredValue = e.target.value
    const isValid = validateValue(enteredValue)

    if (!isValid) return
    setValue(enteredValue)
  }

  return { value, handleChange }
}

export default useInput

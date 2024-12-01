import { useState } from 'react'
import { QuestionSection } from '../../FirstTab/style'
import { SelectContainer, SelectLabel } from './style'

interface SelectSectionProps {
  label: string
  id: string
  optionList: string[]
}

const SelectSection = ({ label, id, optionList }: SelectSectionProps) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <QuestionSection>
      <label htmlFor={id}>{label}</label>
      <SelectContainer>
        {optionList.map((option) => (
          <SelectLabel
            key={option}
            $checked={selectedOption === option}
            onClick={() => handleOptionSelect(option)}
          >
            <input type='radio' />
            {option}
          </SelectLabel>
        ))}
      </SelectContainer>
    </QuestionSection>
  )
}

export default SelectSection

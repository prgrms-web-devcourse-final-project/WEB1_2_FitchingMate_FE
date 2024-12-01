import { QuestionSection } from '../../FirstTab/style'
import { SelectContainer, SelectLabel } from './style'

import useCategoryState from '@hooks/useCategoryState'

interface SelectSectionProps {
  label: string
  id: 'age' | 'maxParticipants' | 'gender' | 'transportType'
  optionList: string[]
}

const SelectSection = ({ label, id, optionList }: SelectSectionProps) => {
  const { getter: selectedOption, setter: setSelectedOption } =
    useCategoryState(id)

  return (
    <QuestionSection>
      <label htmlFor={id}>{label}</label>
      <SelectContainer>
        {optionList.map((option) => (
          <SelectLabel
            key={option}
            $checked={selectedOption === option}
          >
            <input
              type='radio'
              onClick={() => setSelectedOption(option)}
              disabled={selectedOption === option}
            />
            {option}
          </SelectLabel>
        ))}
      </SelectContainer>
    </QuestionSection>
  )
}

export default SelectSection

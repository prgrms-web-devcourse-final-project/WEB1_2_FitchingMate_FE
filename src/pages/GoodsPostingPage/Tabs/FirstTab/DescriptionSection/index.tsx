import useInput from '@hooks/useInput'
import { Textarea } from '@pages/MatePostingPage/Tabs/ThirdTab/style'
import { DescriptionContainer } from './style'

const DescriptionSection = () => {
  const MAX_LENGTH = 200

  const validateDescription = (description: string) => {
    return description.length <= MAX_LENGTH
  }
  const { value, handleChange } = useInput(validateDescription)

  return (
    <DescriptionContainer>
      <label htmlFor='content'>자세한 설명</label>
      <Textarea
        id='content'
        name='content'
        placeholder='상품에 대한 설명을 입력하세요'
        value={value}
        onChange={handleChange}
      />
      <p>
        {value.length}/{MAX_LENGTH}
      </p>
    </DescriptionContainer>
  )
}

export default DescriptionSection

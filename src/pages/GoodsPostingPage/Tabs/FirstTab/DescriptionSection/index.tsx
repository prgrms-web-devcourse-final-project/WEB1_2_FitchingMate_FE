import { Textarea } from '@pages/MatePostingPage/Tabs/ThirdTab/style'
import { DescriptionContainer } from './style'
import { useGoodsFormStore } from '@store/useGoodsFormStore'

const DescriptionSection = () => {
  const description = useGoodsFormStore((state) => state.goods.content)
  const setDescription = useGoodsFormStore((state) => state.setContent)

  const MAX_LENGTH = 500

  const validateDescription = (description: string) => {
    return description.length <= MAX_LENGTH
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (validateDescription(value)) {
      setDescription(value)
    }
  }

  return (
    <DescriptionContainer>
      <label htmlFor='content'>자세한 설명</label>
      <Textarea
        id='content'
        name='content'
        placeholder='상품에 대한 설명을 입력하세요'
        value={description}
        onChange={handleChange}
      />
      <p>
        {description.length}/{MAX_LENGTH}
      </p>
    </DescriptionContainer>
  )
}

export default DescriptionSection

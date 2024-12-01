import { useMateFormStore } from '@store/useMateFormStore'
import { Textarea } from '../style'
import { DescriptionContainer } from '@pages/GoodsPostingPage/Tabs/FirstTab/DescriptionSection/style'

const MAX_CONTENT_LENGTH = 200

const TextAreaSection = () => {
  const {
    matePost: { content },
    setContent,
  } = useMateFormStore()

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <DescriptionContainer>
      <label htmlFor='content'>모집 설명</label>
      <Textarea
        id='content'
        name='content'
        placeholder='상품에 대한 설명을 입력하세요'
        value={content}
        onChange={handleChangeContent}
      />
      <p>
        {content.length}/{MAX_CONTENT_LENGTH}
      </p>
    </DescriptionContainer>
  )
}

export default TextAreaSection

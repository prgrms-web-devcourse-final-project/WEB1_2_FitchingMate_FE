import { QuestionSection } from '../FirstTab/style'

import { Container, Input, Textarea } from './style'
import ImageInput from '@components/ImageInput'

const ThirdTab = () => {
  return (
    <Container>
      <QuestionSection>
        <label htmlFor='category-img'>대표 사진</label>
        <ImageInput
          maxCount={1}
          currentCount={0}
        />
      </QuestionSection>
      <QuestionSection>
        <label htmlFor='title'>모집명</label>
        <Input
          type='text'
          id='title'
        />
      </QuestionSection>
      <QuestionSection>
        <label htmlFor='description'>모집 설명</label>
        <Textarea id='description' />
      </QuestionSection>
    </Container>
  )
}

export default ThirdTab

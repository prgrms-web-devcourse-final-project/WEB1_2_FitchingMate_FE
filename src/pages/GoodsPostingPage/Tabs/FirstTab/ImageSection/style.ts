import styled from 'styled-components'
import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'

export const ImageContainer = styled(QuestionSection)`
  flex-direction: row;
`
export const ImageList = styled.div`
  min-width: calc(100% - 120px);

  display: flex;
  gap: 10px;

  flex-wrap: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

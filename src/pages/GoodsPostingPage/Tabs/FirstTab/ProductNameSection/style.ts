import styled from 'styled-components'
import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'

export const ProductNameContainer = styled(QuestionSection)`
  & > p {
    text-align: right;

    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.fontColor.black};
  }
`

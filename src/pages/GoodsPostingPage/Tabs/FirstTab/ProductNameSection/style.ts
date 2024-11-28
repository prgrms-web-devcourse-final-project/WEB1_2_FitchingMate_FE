import styled from 'styled-components'
import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'

export const ProductNameContainer = styled(QuestionSection)`
  position: relative;

  & > p {
    width: fit-content;

    position: absolute;
    bottom: 5px;
    right: 25px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.fontColor.black};
  }
`

import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import styled from 'styled-components'

export const DescriptionContainer = styled(QuestionSection)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.fontColor.black};

    position: absolute;
    bottom: 5px;
    right: 25px;
  }
`

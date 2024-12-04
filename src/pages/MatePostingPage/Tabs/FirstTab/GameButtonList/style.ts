import styled from 'styled-components'

import { QuestionSection } from '../style'

export const GameSection = styled(QuestionSection)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const GameButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: scroll;

  @media all and (max-width: 431px) {
    gap: 0.625em;
    justify-content: flex-start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const GameButton = styled.button<{ $isActive?: boolean }>`
  width: fit-content;
  padding: 0.5em 1em;
  border-radius: 9999px;

  color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.cwhite : theme.fontColor.navy};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.navy : theme.fontColor.cwhite};
`

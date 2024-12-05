import styled from 'styled-components'

export const TeamSelectContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 12px;

  /* 스크롤바 일단 살려둠 */

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Card = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.fontColor.navy : theme.fontColor.cwhite};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.fontColor.navy};
  }
`

import { text } from 'stream/consumers'
import styled from 'styled-components'

export const GameCard = styled.label<{ $isActive?: boolean }>`
  width: 100%;
  padding: 0.625em 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: inherit !important;
  font-weight: inherit !important;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.cwhite : theme.fontColor.black};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.navy : null};
`

export const InputContainer = styled.span`
  width: 20%;
  gap: 0.625em;

  & input[type='checkbox'] {
    display: inline-block;
    vertical-align: middle;
    appearance: checkbox;
    width: 1.25em;
    height: 1.25em;

    accent-color: ${({ theme }) => theme.fontColor.navy};

    &:focus {
      border: none;
      outline: none;
    }
  }

  & > span {
    margin-left: 0.5em;
  }
`

export const LocationText = styled.p`
  width: 45%;
  text-align: center;
`

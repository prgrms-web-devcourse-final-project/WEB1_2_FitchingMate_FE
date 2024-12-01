import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
`
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`
export const Label = styled.label<{ $checked?: boolean }>`
  position: relative;
  padding: 8px 16px;
  cursor: pointer;

  border-radius: 9999px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.fontColor.navy : theme.fontColor.cwhite};
  color: ${({ theme, $checked }) =>
    $checked ? theme.fontColor.cwhite : theme.fontColor.navy} !important;
`

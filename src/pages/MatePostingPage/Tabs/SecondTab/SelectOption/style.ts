import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 15px;
`

export const SelectLabel = styled.label<{ $checked?: boolean }>`
  position: relative;
  width: fit-content;
  padding: 8px 16px;
  cursor: pointer;

  border-radius: 9999px;
  background-color: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
  font-size: ${({ theme }) => theme.fontSize.large} !important;
  font-weight: ${({ theme }) => theme.fontWeight.semi};

  background: ${({ theme, $checked }) => $checked && theme.fontColor.navy};
  color: ${({ theme, $checked }) =>
    $checked && theme.fontColor.cwhite} !important;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`

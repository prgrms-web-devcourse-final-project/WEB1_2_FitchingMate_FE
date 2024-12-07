import { theme } from '@styles/theme'
import styled from 'styled-components'

interface ButtonProps {
  $width?: number
  $isNavy?: boolean
  $disabled? : boolean
}

const Button = styled.button<ButtonProps>`
  padding: 0.63em 0;
  background: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  border-radius: 4px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  ${({ theme, $isNavy }) => $isNavy && `background: ${theme.fontColor.navy}`};
  ${({ theme, $isNavy }) => $isNavy && `color: ${theme.fontColor.cwhite}`};
  ${({ $width }) => $width && `width: ${$width}%`};
  ${({ $disabled }) =>
    $disabled &&
    `
    background: ${theme.fontColor.cwhite};
    color: ${theme.fontColor.black};
  `}
`

export default Button

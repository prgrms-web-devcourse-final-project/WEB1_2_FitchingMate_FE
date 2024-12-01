import styled from 'styled-components'

interface BedgeProps {
  bgColor?: string
}

export const Bedge = styled.div<BedgeProps>`
  width: fit-content;
  height: fit-content;
  padding: 0.25em 0.625em;
  color: ${({ theme }) => theme.fontColor.white};
  background-color: ${({ bgColor, theme }) => bgColor || theme.fontColor.navy};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`

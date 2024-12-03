import styled from 'styled-components'

interface BedgeProps {
  $bgcolor?: string
}

export const Bedge = styled.div<BedgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 1.5em; /* 고정 높이 */
  line-height: 1.5em; /* 고정 높이 */
  padding: 0 0.625em; /* 텍스트 주변의 여백 */
  color: ${({ theme }) => theme.fontColor.white};
  background-color: ${({ $bgcolor, theme }) =>
    $bgcolor || theme.fontColor.navy};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
  overflow: hidden;
  text-overflow: ellipsis;
`

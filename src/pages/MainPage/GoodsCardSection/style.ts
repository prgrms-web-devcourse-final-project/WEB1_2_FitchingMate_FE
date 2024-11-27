import styled from 'styled-components'
import { theme } from '@styles/theme'

export const GoodsCardContainer = styled.div`
  width: 100%;
  padding: 1em 1.25em;

  h3 {
    padding: 1em 0;
  }

  .more {
    padding: 1em 1.25em;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    text-align: center;
    cursor: pointer;
    color: ${theme.fontColor.black};
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 카드 간격 */
  justify-content: space-between;

  & > * {
    flex: 1 1 calc(50% - 10px); /* 2열을 유지하면서 카드 크기 맞춤 */
    max-width: calc(50% - 10px); /* 최대 너비 제한 */
  }
`

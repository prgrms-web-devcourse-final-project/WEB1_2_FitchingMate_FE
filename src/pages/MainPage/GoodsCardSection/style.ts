import styled from 'styled-components'
import { theme } from '@styles/theme'

export const GoodsCardContainer = styled.div`

  padding: 0 1.25em;
  border-bottom: 1px solid ${theme.fontColor.cwhite};

  h3 {
    padding: 1em 0;
  }

  .more {
    width: 100%;
    margin-top: 1em;
    padding: 1em;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    text-align: center;
    cursor: pointer;
    color: ${theme.fontColor.black};
  }

  .no-goods {
    padding: 1em 1.25em;
    text-align: center;
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

export const MoreSection = styled.div`
  display: flex;
  justify-content: center;
  
`

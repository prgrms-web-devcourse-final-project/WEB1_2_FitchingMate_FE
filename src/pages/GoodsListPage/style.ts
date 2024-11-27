import { theme } from '@styles/theme'
import styled from 'styled-components'

export const TeamSelectWrap = styled.div`
  padding: 1em 20px;
  border-bottom: 1px solid ${theme.border};
`

export const FilterWrap = styled.div`
  padding: 0.75em 20px;
  border-bottom: 1px solid ${theme.border};

  & > div {
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const GoodsCardWrap = styled.div`
  padding: 1em 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px 20px;
`

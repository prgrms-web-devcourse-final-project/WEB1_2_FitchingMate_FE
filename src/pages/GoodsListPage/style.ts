import { theme } from '@styles/theme'
import styled from 'styled-components'

export const SectionWrap = styled.section`
  overflow-y: auto;
  height: 100vh;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const TeamSelectWrap = styled.div`
  padding: 1em 20px;
  border-bottom: 1px solid ${theme.border};
`

export const FilterWrap = styled.div`
  padding: 0.75em 20px;
  border-bottom: 1px solid ${theme.border};

  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow-x: scroll;

  @media all and (max-width: 431px) {
    gap: 0 0.625em;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  & > button {
    flex-shrink: 0;
  }

  & > div {
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    flex-wrap: nowrap;
  }
`

export const GoodsCardWrap = styled.div`
  padding: 1em 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px 20px;
  min-height: 34em;
  
  & > a {
    display: block;
    width: calc(50% - 10px);
  }
`

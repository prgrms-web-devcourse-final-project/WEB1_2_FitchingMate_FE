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
  padding: 1em 0 1em 20px;
  border-bottom: 1px solid ${theme.border};

  & > div {
    padding-right: 20px;
  }
`

export const FilterWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75em 20px;
  border-bottom: 1px solid ${theme.border};
`

export const FilterModalButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 18px;
    background-color: #d5d5d5;

    margin: 0 10px;
  }
`

export const FilterSelectOptionWrap = styled.div`
  white-space: nowrap;

  & > p {
    float: left;
    padding: 0.5em 1em;
    background-color: ${theme.fontColor.navy};
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.semi};
    color: ${theme.fontColor.white};
    border-radius: 9999px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`

// 매이트 모달 옵션

export const FilterModalWrap = styled.div`
  margin-bottom: 1.875em;
`

export const FilterModalLabel = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.black};
`

export const FilterButtonWrap = styled.div`
  margin-top: 0.75em;
`

export const FilteredMateList = styled.div`
  min-height: 34em;
`
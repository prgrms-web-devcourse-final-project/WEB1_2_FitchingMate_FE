import styled from 'styled-components'

export const SearchResultItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border-bottom: 1px solid #ddd;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }

  & p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  & div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.fontColor.cwhite};
  }
`

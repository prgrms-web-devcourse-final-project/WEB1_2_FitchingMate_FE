import styled from 'styled-components'

export const SearchResult = styled.div`
  width: 100%;
  background: #fff;

  position: absolute;
  top: 51px;
  left: 50%;
  transform: translateX(-50%);

  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 250px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const NoneResult = styled.p`
  padding: 16px;
`

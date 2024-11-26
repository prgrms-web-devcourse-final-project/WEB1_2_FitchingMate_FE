import styled from 'styled-components'

export const LocationSearchSection = styled.div`
  position: relative;
  z-index: 999;
`
export const SearchResult = styled.div`
  width: 100%;
  background: #fff;

  position: absolute;
  top: 56px;
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

export const MapSection = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 120px);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  background: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
`

import styled from 'styled-components'

export const MapSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LocationSearchSection = styled.div`
  position: relative;
  height: 40px;
  z-index: 999;
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

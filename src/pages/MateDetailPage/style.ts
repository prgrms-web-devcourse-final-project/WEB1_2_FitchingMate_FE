import styled from 'styled-components'
import { theme } from '@styles/theme'

export const MateDetailPageContainer = styled.div`
  color: ${theme.fontColor.black};
`

export const MateDetailPhoto = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export const MateDetailDescription = styled.div`
  width: calc(100% - 40px);
  max-height: 190px;
  overflow-y: scroll;
  padding: 1em;
  margin: 16px 20px 150px;
  background-color: ${theme.fontColor.cwhite};
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.fontColor.black};
  border-radius: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
 
`

export const UserInfoListWrapper = styled.div`
  padding: 0 20px 8px;
  border-bottom: 1px solid #cacaca;

  & > div {
    margin-top: 0;
  }
`
export const MateDetailActionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 480px;
  min-height: 100px;
  background-color: ${theme.fontColor.white};
`

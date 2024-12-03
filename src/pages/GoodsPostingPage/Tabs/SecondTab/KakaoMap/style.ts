import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

export const KakaoMapContainer = styled(Map)`
  & > svg {
    display: none;
  }
`

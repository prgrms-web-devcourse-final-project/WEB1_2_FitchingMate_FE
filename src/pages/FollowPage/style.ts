import { theme } from '@styles/theme'
import styled from 'styled-components'

export const FollowPageWrap = styled.section`
  padding: 20px 0;
`

export const FollowButtonWrap = styled.div`
  padding: 0 20px;
`

export const FollowBoxContainer = styled.div`
  margin-top: 1.25em;
`

export const FollowBoxWrap = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #f2f3f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FollowBoxLeft = styled.div`
  & > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 1.25em;
  }
  & > p {
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.fontColor.black};
  }
`

export const FollowBoxRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625em;
  gap: 0.625em;
`

import { theme } from '@styles/theme'
import styled from 'styled-components'

export const ProfileWrap = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => `${width}em`};
  max-width: 100px;
  height: ${({ height }) => `${height}em`};
  max-height: 100px;
  position: relative;

  & > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const ProfileMyTeamWrap = styled.div`
  width: 30%;
  height: 30%;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.fontColor.cwhite};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  & > svg {
    width: 80%;
    object-fit: cover;
    object-position: center;
  }
`

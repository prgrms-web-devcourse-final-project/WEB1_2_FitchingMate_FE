import { content } from './../../pages/GoodsListPage/mockData'
import { theme } from '@styles/theme'
import styled, { keyframes } from 'styled-components'

export const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const SpinBackGroundAnimation = keyframes`
  0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%;}
`

export const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerRound = styled.div`
  position: relative;
  width: 5em;
  height: 5em;

  border-radius: 50%;
  animation: ${SpinAnimation} 2s linear infinite;
  background: conic-gradient(transparent 20%, ${theme.fontColor.navy});

  &::after {
    content: '';
    display: block;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
  }
`

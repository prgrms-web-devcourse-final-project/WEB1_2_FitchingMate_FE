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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerRound = styled.div`
  position: relative;
  width: 6.25em;
  height: 6.25em;

  border-radius: 50%;
  animation: ${SpinAnimation} 1s linear infinite;
  background: linear-gradient(
    135deg,
    transparent,
    ${theme.fontColor.navy},
    transparent,
    ${theme.fontColor.navy}
  );
  background-size: 300% 300%;
  animation:
    ${SpinBackGroundAnimation} 3s ease infinite,
    ${SpinAnimation} 1s linear infinite;

  &::after {
    content: '';
    display: block;
    width: 90%;
    height: 80%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
  }
`

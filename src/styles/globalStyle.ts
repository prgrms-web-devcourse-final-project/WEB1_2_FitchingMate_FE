import normalize from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    line-height: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }

  html {
    font-size: 16px;

    @media all and (max-width:431px) {
      font-size: 14px;
    }
  }

  button {
    cursor: pointer;
    border: none;
    appearance: none;
    outline: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    display: block;

    @media all and (max-width: 431px) {
      transform: scale(0.88);
    }
  }

  textarea {
    &::D-webkit-scrollbar {
      display: none;
    }
  }

  #root {
    width: 100%;
    max-width: 480px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0 auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  input {
    appearance: none;
    outline: none;
    border: none;
    width: 100%;
    padding: 1em;
    font-size: ${({ theme }) => theme.fontSize.large};
    background-color: ${({ theme }) => theme.fontColor.cwhite};
    border-radius: 0.25em;
    margin-top: 0.5em;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  input::placeholder {
    color: ${({ theme }) => `${theme.fontColor.black}50`};
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.fontColor.navy};
  }

  textarea {
    appearance: none;
    outline: none;
    resize: none;
    width: 100%;
    padding: 1em;
    font-size: ${({ theme }) => theme.fontSize.large};
    background-color: ${({ theme }) => theme.fontColor.cwhite};
    border-radius: 0.25em;
    margin-top: 0.5em;
    min-height: 9.4em;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  label {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
    color: ${({ theme }) => theme.fontColor.black};
  }

  img {
    display: block;
  }

  .skeleton-flex {
    flex: 4;
  }
`

export const GlobalContainer = styled.div`
  height: calc(100vh - (48px + 60px));
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const SubGlobalContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const GlobalFloatAside = styled.aside`
  width: 100%;
  min-width: 360px;
  max-width: 480px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`

export const GlobalFloatButton = styled.div`
  display: inline;
  padding: 14px;
  position: absolute;
  bottom: calc(60px + 8px);
  right: 8px;
  border-radius: 50%;
  filter: drop-shadow(2px 2px 5px #00000025);
  background-color: ${theme.fontColor.white};
`

export default GlobalStyle

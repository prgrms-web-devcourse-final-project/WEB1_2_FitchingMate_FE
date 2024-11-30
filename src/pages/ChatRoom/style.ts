import styled, { css } from 'styled-components'

export const ChatCardContainer = styled.div`
  /* height: calc(100% - 48px); */
  overflow-y: auto;
  padding: 1em 20px;
  height: calc(100% - 150px);

  @media all and (max-width: 431px) {
    height: calc(100% - 25px);
  }
`

export const ChatBottomModalContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const SubmitButtonContainer = styled.div<{ $isOwner?: boolean }>`
  display: flex;
  justify-content: space-between;

  & button {
    width: 48%;
    padding: 0.8em 0;
    border-radius: 10px;

    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }

  & > button:first-child {
    background-color: ${({ theme }) => theme.fontColor.cwhite};
    color: ${({ theme }) => theme.fontColor.navy};

    ${({ $isOwner }) =>
      !$isOwner &&
      css`
        width: 100%;
        background-color: ${({ theme }) => theme.fontColor.navy};
        color: ${({ theme }) => theme.fontColor.cwhite};
      `}
  }

  & > button:last-child {
    background-color: ${({ theme }) => theme.fontColor.navy};
    color: ${({ theme }) => theme.fontColor.cwhite};

    ${({ $isOwner }) =>
      !$isOwner &&
      css`
        display: none;
      `}
  }
`

export const GeneralChatButton = styled.button`
  width: 100%;
  padding: 0.8em 0;
  border-radius: 10px;

  color: ${({ theme }) => theme.fontColor.cwhite};
  background-color: ${({ theme }) => theme.fontColor.navy};

  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
`

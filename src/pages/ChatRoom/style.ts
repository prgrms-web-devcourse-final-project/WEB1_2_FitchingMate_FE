import styled, { css } from 'styled-components'

export const ChatRoomContainer = styled.div`
  height: calc(100%);
`

export const ChatCardContainer = styled.div<{ $isGeneral?: boolean }>`
  overflow-y: auto;
  padding: 1em 20px;
  display: flex;
  flex-direction: column;
  gap: 13px;

  /* CSS 변수 선언 */
  --header-height: 47.2px;
  --banner-height: 100px;
  --banner-padding: 2em;
  --footer-height: 58.4px;
  --bottom-margin: 0.9em;
  --total-height: calc(
    var(--header-height) + var(--banner-height) + var(--banner-padding) +
      var(--footer-height) + var(--bottom-margin)
  );

  /* 메이트 화면용 높이 계산 */
  height: calc(100% - var(--total-height));

  ${({ $isGeneral }) =>
    $isGeneral &&
    css`
      height: calc(100% - 134.4px);
    `}

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
export const EnterChatMessage = styled.div`
  padding: 0.2em 0;
  border-radius: 15px;
  text-align: center;

  background-color: ${({ theme }) => theme.fontColor.navy};
  color: ${({ theme }) => theme.fontColor.cwhite};

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

import styled from 'styled-components'

export const CardContainer = styled.div<{ $isUserChat: boolean }>`
  width: 100%;

  display: flex;
  justify-content: ${({ $isUserChat }) => ($isUserChat ? 'flex-end' : null)};

  font-size: ${({ theme }) => theme.fontSize.large};
`
export const CardContent = styled.div`
  display: flex;
  gap: 5px;
`

export const ContentWrapper = styled.div<{ $isUserChat: boolean }>`
  display: flex;
  gap: 5px;
  align-items: flex-end;

  flex-direction: ${({ $isUserChat }) => ($isUserChat ? 'row-reverse' : null)};

  margin-top: ${({ $isUserChat }) => ($isUserChat ? '0' : '8px')};

  & > p:last-child {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`

export const ContentWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ContentText = styled.p<{ $isUserChat: boolean }>`
  max-width: 230px;
  padding: 10px;
  border-radius: 10px;

  color: ${({ theme, $isUserChat }) =>
    $isUserChat ? theme.fontColor.cwhite : theme.fontColor.navy};
  background-color: ${({ theme, $isUserChat }) =>
    $isUserChat ? theme.fontColor.navy : theme.fontColor.cwhite};
`

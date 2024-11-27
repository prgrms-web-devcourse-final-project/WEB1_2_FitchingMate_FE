import { ChatType } from '@pages/ChatPage'
import styled from 'styled-components'

interface ChatCardContainerProps {
  $chatType: ChatType | null
}

export const ChatCardContainer = styled.div<ChatCardContainerProps>`
  height: calc(100% - 48px);
  overflow-y: auto;
  padding: 1.25em 20px;

  height: ${({ $chatType }) => $chatType === '메이트' && 'calc(100% - 231px)'};
  height: ${({ $chatType }) => $chatType === '굿즈' && 'calc(100% - 223px)'};

  @media all and (max-width: 431px) {
    height: calc(100% - 25px);
  }
`

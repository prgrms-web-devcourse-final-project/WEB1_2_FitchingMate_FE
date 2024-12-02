import { ChatRoomContainer } from './style'
import GoodsChatRoom from './Rooms/GoodsChatRoom'
import MateChatRoom from './Rooms/MateChatRoom'
import GeneralChatRoom from './Rooms/GeneralChatRoom'
import SubHeader from '@layouts/SubHeader'

import useCurrentChatRoom from '@hooks/useCurrentChatRoom'
export type ChatType = '메이트' | '굿즈' | '일반' | null

const ChatRoom = () => {
  const currentChatType = useCurrentChatRoom()

  return (
    <ChatRoomContainer>
      <SubHeader left='back' />
      {currentChatType === '메이트' && (
        <MateChatRoom currentChatType={currentChatType} />
      )}
      {currentChatType === '굿즈' && (
        <GoodsChatRoom currentChatType={currentChatType} />
      )}
      {currentChatType === '일반' && (
        <GeneralChatRoom currentChatType={currentChatType} />
      )}
    </ChatRoomContainer>
  )
}

export default ChatRoom

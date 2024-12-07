import { ChatRoomContainer } from './style'
import GoodsChatRoom from './Rooms/GoodsChatRoom'
import MateChatRoom from './Rooms/MateChatRoom'
import GeneralChatRoom from './Rooms/GeneralChatRoom'
import SubHeader from '@layouts/SubHeader'

import { Navigate, useLocation, useParams } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

export type ChatType = '메이트' | '굿즈' | '일반'

const ChatRoom = () => {
  const { type: currentChatType } = useParams()

  if (currentChatType === null) return <Navigate to={ROUTE_PATH.CHAT} />

  return (
    <ChatRoomContainer>
      <SubHeader left='back' />
      {currentChatType === '메이트' && (
        <MateChatRoom currentChatType={currentChatType} />
      )}
      {currentChatType === '굿즈' && <GoodsChatRoom />}
      {currentChatType === '일반' && (
        <GeneralChatRoom currentChatType={currentChatType} />
      )}
    </ChatRoomContainer>
  )
}

export default ChatRoom

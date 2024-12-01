import { useState } from 'react'
import GoodsChatRoom from './Rooms/GoodsChatRoom'
import MateChatRoom from './Rooms/MateChatRoom'
import GeneralChatRoom from './Rooms/GeneralChatRoom'
import SubHeader from '@layouts/SubHeader'

export type ChatType = '메이트' | '굿즈' | '일반' | null

const ChatRoom = () => {
  const [currentChatType, setCurrentChatType] = useState<ChatType>('일반')

  return (
    <>
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
    </>
  )
}

export default ChatRoom

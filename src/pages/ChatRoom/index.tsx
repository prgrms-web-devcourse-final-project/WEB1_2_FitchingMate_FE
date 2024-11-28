import { ChatCardContainer } from './style'

import ChatInput from './ChatInput'
import ChatCard from './ChatCard'
import MateCard from '@components/MateCard'

import { useState } from 'react'
import { ChatType } from '@pages/ChatPage'
import GoodsListCard from '@components/GoodsListCard'
import { GlobalFloatAside } from '@styles/globalStyle'

const ChatRoom = ({ chatType }: { chatType: ChatType }) => {
  const [currentType, setCurrentType] = useState<ChatType | null>(null)

  const MateBanner = currentType === '메이트' && <MateCard />
  const GoodsBanner = currentType === '굿즈' && <GoodsListCard />

  return (
    <>
      {MateBanner || GoodsBanner}
      <ChatCardContainer $chatType={currentType}>
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
      </ChatCardContainer>

      <GlobalFloatAside>
        <ChatInput />
      </GlobalFloatAside>
    </>
  )
}

export default ChatRoom

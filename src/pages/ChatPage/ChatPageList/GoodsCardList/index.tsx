import { useGoodsChatPage } from '@hooks/useChatPage'
import ChatCard from '@pages/ChatPage/ChatCard'

const GoodsCardList = ({ onExitClick }: { onExitClick: () => void }) => {
  const {
    goodsChatList,
    goodsChatListLoading,
    goodsChatListError,
    goodsChatListErrorMessage,
  } = useGoodsChatPage()

  return (
    <>
      {goodsChatList?.content?.map((goodsChat) => (
        <ChatCard
          key={goodsChat.chatRoomId}
          currentTab='굿즈'
          onExitClick={onExitClick}
          goodsChatroomContent={goodsChat}
        />
      ))}
    </>
  )
}

export default GoodsCardList

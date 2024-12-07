import { useMateChatPage } from '@hooks/useChatPage'
import ChatCard from '@pages/ChatPage/ChatCard'
import MateChatCard from '@pages/ChatPage/ChatCard/MateChatCard'

const MateCardList = ({ onExitClick }: { onExitClick: () => void }) => {
  const {
    mateChatList,
    mateChatListLoading,
    mateChatListError,
    mateChatListErrorMessage,
  } = useMateChatPage()

  if (!mateChatList) return null
  console.log(mateChatList.data)

  return (
    <>
      {mateChatList?.data?.content?.map((mateChat) => (
        <MateChatCard
          key={mateChat.roomId}
          onExitClick={onExitClick}
          mateChatroomContent={mateChat}
        />
      ))}
    </>
  )
}

export default MateCardList

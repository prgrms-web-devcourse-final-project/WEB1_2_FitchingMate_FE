import { useMateChatPage } from '@hooks/useChatPage'
import MateChatCard from '@pages/ChatPage/ChatCard/MateChatCard'

const MateCardList = ({ onExitClick }: { onExitClick: () => void }) => {
  const {
    mateChatList,
    mateChatListLoading,
    mateChatListError,
    mateChatListErrorMessage,
  } = useMateChatPage()

  if (!mateChatList) return null

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

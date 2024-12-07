import { useMateChatPage } from '@hooks/useChatPage'
import ChatCard from '@pages/ChatPage/ChatCard'

const MateCardList = ({ onExitClick }: { onExitClick: () => void }) => {
  const {
    mateChatList,
    mateChatListLoading,
    mateChatListError,
    mateChatListErrorMessage,
  } = useMateChatPage()

  if (!mateChatList) return null
  console.log(mateChatList)

  //   return (
  //     <>
  //       {mateChatList?.content?.map((mateChat) => (
  //         <ChatCard
  //           key={mateChat.roomId}
  //           currentTab='굿즈'
  //           onExitClick={onExitClick}
  //           mateChatroomContent={mateChat}
  //         />
  //       ))}
  //     </>
  //   )
}

export default MateCardList

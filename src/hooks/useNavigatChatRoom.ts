import { useNavigate } from 'react-router-dom'
import { ChatType } from '@pages/ChatPage'

const useNavigatChatRoom = (currentTab: ChatType) => {
  const navigate = useNavigate()

  const handleChatCardClick = (chatRoomId: number, postId?: number) => {
    if (currentTab === '메이트') {
      navigate(`/chat-room/${currentTab}/${chatRoomId}`, {
        state: { postId },
      })
    }
    if (currentTab === '굿즈') {
      navigate(`/chat-room/${currentTab}/${chatRoomId}`)
    }
  }

  const isGoods = currentTab === '굿즈'

  return { handleChatCardClick, isGoods }
}

export default useNavigatChatRoom

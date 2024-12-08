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
    if (currentTab === '일반') {
      navigate(`/chat-room/${currentTab}/${chatRoomId}`)
    }
  }

  const isGoods = currentTab === '굿즈'
  const isGeneral = currentTab === '일반'

  return { handleChatCardClick, isGoods, isGeneral }
}

export default useNavigatChatRoom

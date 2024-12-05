import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { ChatType } from '@pages/ChatPage'

const useNavigatChatRoom = (currentTab: ChatType) => {
  const navigate = useNavigate()

  const handleChatCardClick = (chatRoomId: number) => {
    if (currentTab === '메이트') {
      navigate(`${ROUTE_PATH.CHAT_ROOM}?type=${currentTab}/${chatRoomId}`)
    }
    if (currentTab === '굿즈') {
      navigate(`${ROUTE_PATH.CHAT_ROOM}?type=${currentTab}/${chatRoomId}`)
    }
    if (currentTab === '일반') {
      navigate(`${ROUTE_PATH.CHAT_ROOM}?type=${currentTab}/${chatRoomId}`)
    }
  }

  const isGoods = currentTab === '굿즈'
  const isGeneral = currentTab === '일반'

  return { handleChatCardClick, isGoods, isGeneral }
}

export default useNavigatChatRoom

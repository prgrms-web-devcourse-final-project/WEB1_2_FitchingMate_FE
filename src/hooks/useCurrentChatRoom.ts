import { useParams } from 'react-router-dom'

const useCurrentChatRoom = () => {
  const { type, id } = useParams()

  return { currentChatType: type, chatRoomId: id }
}

export default useCurrentChatRoom

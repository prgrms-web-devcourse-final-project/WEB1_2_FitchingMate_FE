import { useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { useEffect } from 'react'
import { ChatType } from '@pages/ChatPage'

const useNavigateChat = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const currentTab = searchParams.get('type') as ChatType

  // 최초 진입시 메이트 채팅탭으로 이동
  useEffect(() => {
    if (currentTab === null) {
      setSearchParams({ type: '메이트' })
    }
  }, [currentTab])

  const handleTabClick = (tab: ChatType) => {
    setSearchParams({ type: tab })
  }

  const handleChatCardClick = () => {
    navigate(`${ROUTE_PATH.CHAT_ROOM}?type=${currentTab}`)
  }

  return { currentTab, handleTabClick, handleChatCardClick }
}

export default useNavigateChat

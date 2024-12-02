import { useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { useEffect, useState } from 'react'
import { ChatType } from '@pages/ChatPage'

const useNavigateChat = () => {
  const [currentTab, setCurrentTab] = useState<ChatType | null>(null)
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')

  useEffect(() => {
    navigate(`${ROUTE_PATH.CHAT}?type=${type}`)
    setCurrentTab(type as ChatType)
  }, [])

  const handleTabClick = (tab: ChatType) => {
    navigate(`${ROUTE_PATH.CHAT}?type=${tab}`)
    setCurrentTab(tab)
  }

  const handleChatCardClick = () => {
    console.log(currentTab)
    navigate(`${ROUTE_PATH.CHAT_ROOM}?type=${currentTab}`)
  }

  return { currentTab, handleTabClick, handleChatCardClick }
}

export default useNavigateChat

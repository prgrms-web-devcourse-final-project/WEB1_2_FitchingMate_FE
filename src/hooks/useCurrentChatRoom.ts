import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChatType } from '@pages/ChatRoom'

const useCurrentChatRoom = () => {
  const [currentChatType, setCurrentChatType] = useState<ChatType | string>('')

  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')

  useEffect(() => {
    setCurrentChatType(type as ChatType)
  }, [type])

  return currentChatType
}

export default useCurrentChatRoom

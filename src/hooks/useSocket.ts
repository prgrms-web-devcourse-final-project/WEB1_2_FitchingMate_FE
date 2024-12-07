import { useEffect, useRef } from 'react'
import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

const wsUrl = import.meta.env.VITE_SOCKET_ENDPOINT

export const useSocket = (chatType: string, chatRoomId: string) => {
  const socketRef = useRef<Client | null>(null)

  const currentChatType = chatType === '굿즈' ? 'goods' : 'mate'
  const subscribePoint = `/sub/chat/${currentChatType}/${chatRoomId}`
  const publishPoint = `/pub/chat/${currentChatType}/message`

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS(wsUrl),

      heartbeatIncoming: 0,
      heartbeatOutgoing: 0,

      onConnect: () => {
        // 연결 성공 후 구독 설정
        client.subscribe(subscribePoint, () => {
          socketRef.current = client
        })
      },
    })

    try {
      client.activate()
    } catch (error) {
      console.error(error)
    }

    return () => {
      if (client.active) client.deactivate()
    }
  }, [chatRoomId])

  const submitChat = (message: string) => {
    if (!socketRef.current) return

    const client = socketRef.current

    const messageData = {
      roomId: chatRoomId,
      senderId: 3, // 추후 수정되면 토큰으로 변경
      message,
      type: 'TALK',
    }

    client.publish({
      destination: publishPoint,
      body: JSON.stringify(messageData),
    })
  }

  return { socketRef, submitChat }
}

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

      debug: (str: string) => console.log('STOMP Debug:', str),

      heartbeatIncoming: 0,
      heartbeatOutgoing: 0,

      onConnect: (frame) => {
        console.log('연결 성공:', frame)

        // 연결 성공 후 구독 설정
        client.subscribe(subscribePoint, (message) => {
          console.log('메시지 수신:', message.body)
        })

        socketRef.current = client
      },

      onStompError: (frame) => {
        console.error('스톰프 에러:', frame)
      },

      onWebSocketError: (event) => {
        console.error('웹소켓 에러:', event)
      },

      onWebSocketClose: (event) => {
        console.log('연결 종료:', event)
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

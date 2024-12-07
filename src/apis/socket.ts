import SockJS from 'sockjs-client'

const socketPoint = import.meta.env.VITE_SOCKET_POINT
export const goodsChatPrefix = '/sub/chat/goods'
export const mateChatPrefix = '/sub/chat/mate'
export const dmChatPrefix = '/sub/chat/dm'

export const broker = new SockJS(socketPoint)

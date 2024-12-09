import { GoodsChatInputContainer } from '@pages/ChatRoom/ChatInput/style'

import UpIcon from '@assets/icon/up_black.svg?react'
import SendIcon from '@assets/icon/message_send.svg?react'
import { useRef } from 'react'

interface ChatInputProps {
  handleOpenBottomModal: () => void
  submitChat: (message: string) => void
  chatRoomStatus: string
  postStatus?: string
}

const GoodsChatInput = ({
  handleOpenBottomModal,
  submitChat,
  chatRoomStatus,
  postStatus,
}: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputRef.current) return

    const value = inputRef.current.value

    if (value.trim() === '') return

    submitChat(value)
    inputRef.current.value = ''
  }

  const renderChatWarning = () => {
    if (postStatus === '거래완료') {
      return <p>⚠️ 거래가 완료되었습니다.</p>
    }

    if (postStatus === '거래중' && chatRoomStatus === 'false') {
      return <p>⚠️ 이런! 더 이상 대화를 나눌 상대가 없어요!</p>
    }

    return (
      <>
        <button
          type='button'
          onClick={handleOpenBottomModal}
        >
          <UpIcon />
        </button>
        <input
          ref={inputRef}
          type='text'
          placeholder='메시지를 입력해주세요.'
          id='message'
        />
        <button type='submit'>
          <SendIcon />
        </button>
      </>
    )
  }

  console.log(postStatus, chatRoomStatus)

  return (
    <>
      <GoodsChatInputContainer
        onSubmit={handleSubmit}
        $chatRoomStatus={chatRoomStatus}
        $postStatus={postStatus || ''}
      >
        {renderChatWarning()}
      </GoodsChatInputContainer>
    </>
  )
}

export default GoodsChatInput

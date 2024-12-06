import { ChatInputContainer } from './style'

import UpIcon from '@assets/icon/up_black.svg?react'
import SendIcon from '@assets/icon/message_send.svg?react'

const ChatInput = ({
  handleOpenBottomModal,
}: {
  handleOpenBottomModal: () => void
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <ChatInputContainer onSubmit={handleSubmit}>
        <button
          type='button'
          onClick={handleOpenBottomModal}
        >
          <UpIcon />
        </button>
        <input
          type='text'
          placeholder='메시지를 입력해주세요.'
        />
        <button type='submit'>
          <SendIcon />
        </button>
      </ChatInputContainer>
    </>
  )
}

export default ChatInput

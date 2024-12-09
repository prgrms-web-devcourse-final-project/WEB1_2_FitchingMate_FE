import { MateChatInputContainer } from './style'

import UpIcon from '@assets/icon/up_black.svg?react'
import SendIcon from '@assets/icon/message_send.svg?react'
import { useRef } from 'react'

interface ChatInputProps {
  handleOpenBottomModal: () => void
  submitChat: (message: string) => void
}

const MateChatInput = ({
  handleOpenBottomModal,
  submitChat,
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

  return (
    <>
      <MateChatInputContainer onSubmit={handleSubmit}>
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
      </MateChatInputContainer>
    </>
  )
}

export default MateChatInput

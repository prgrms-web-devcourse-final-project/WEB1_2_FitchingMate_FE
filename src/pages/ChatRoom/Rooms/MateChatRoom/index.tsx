import { useModal } from '@hooks/useModal'

import { ChatCardContainer } from '../../style'
import ChatCard from '../../ChatCard'
import MateCard from '@components/MateCard'
import { GlobalFloatAside } from '@styles/globalStyle'
import ChatInput from '@pages/ChatRoom/ChatInput'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'

import MateModalContent from './MateModalContent'
import ALERT_MESSAGE from '@constants/alertMessage'

import { useMateChatStore } from '@store/useMateChatStore'
import { ChatType } from '@pages/ChatPage'

const MateChatRoom = ({ currentChatType }: { currentChatType: ChatType }) => {
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { currentAlertStatus } = useMateChatStore()

  const currentAlertMessage = () => {
    const { type, userName } = currentAlertStatus
    const message = ALERT_MESSAGE[type]

    if (typeof message === 'function') {
      return message(userName || '')
    }

    return message
  }

  return (
    <>
      <MateCard />

      <ChatCardContainer>
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
      </ChatCardContainer>

      <GlobalFloatAside>
        <ChatInput handleOpenBottomModal={handleOpenBottomModal} />
      </GlobalFloatAside>

      <BottomModal ref={bottomModalRef}>
        <MateModalContent
          handleAlertClick={handleAlertClick}
          currentChatType={currentChatType}
        />
      </BottomModal>

      <Alert
        ref={alertRef}
        {...currentAlertMessage()}
      />
    </>
  )
}

export default MateChatRoom

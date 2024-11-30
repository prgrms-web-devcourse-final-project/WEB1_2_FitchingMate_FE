import { GlobalFloatAside } from '@styles/globalStyle'

import ChatInput from '../../ChatInput'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'
import { ChatCardContainer } from '../../style'
import ChatCard from '../../ChatCard'

import { useModal } from '@hooks/useModal'
import GeneralModalContent from './GeneralModalContent'
import ALERT_MESSAGE, { AlertMessageObject } from '@constants/alertMessage'
import { ChatType } from '@pages/ChatPage'

const GeneralChatRoom = ({
  currentChatType,
}: {
  currentChatType: ChatType
}) => {
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const currentAlertMessage = ALERT_MESSAGE.CHAT_EXIT as AlertMessageObject

  const handleAlertAction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('handleAlertAction')
  }

  return (
    <>
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
        <GeneralModalContent
          handleAlertClick={handleAlertClick}
          currentChatType={currentChatType}
        />
      </BottomModal>

      <Alert
        ref={alertRef}
        handleAlertClick={handleAlertAction}
        {...currentAlertMessage}
      />
    </>
  )
}

export default GeneralChatRoom

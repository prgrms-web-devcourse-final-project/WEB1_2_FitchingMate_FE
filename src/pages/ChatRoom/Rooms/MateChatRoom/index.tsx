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
import useGetMatePost from '@hooks/usegetMatePost'
import { transformMatePostToCardData } from '@utils/formatPostData'

const MateChatRoom = ({ currentChatType }: { currentChatType: ChatType }) => {
  const { currentAlertStatus } = useMateChatStore()

  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { matePost, matePostLoading, matePostErrorMessage, matePostError } =
    useGetMatePost(15)

  console.log(matePost)

  const currentAlertMessage = () => {
    const { type, userName } = currentAlertStatus
    const message = ALERT_MESSAGE[type]

    if (typeof message === 'function') {
      return message(userName || '')
    }

    return message
  }

  if (!matePost) return null

  const cardData = transformMatePostToCardData(matePost)

  return (
    <>
      <MateCard card={cardData} />

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

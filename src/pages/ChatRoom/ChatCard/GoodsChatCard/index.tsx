import ProfileBedge from '@components/ProfileBedge'
import {
  CardContainer,
  CardContent,
  ContentText,
  ContentWrapper,
  ContentWrapperInner,
  UserProfileWrapper,
} from '../style'
import { formatChatContent } from '@utils/formatChatContent'
import { formatChatTime } from '@utils/formatDate'

interface ChatCardProps {
  message: {
    chatMessageId: number
    message: string
    messageType: string
    roomId: number
    senderId: number
    senderImageUrl: string
    senderNickname: string
    sentAt: string
  }
}

const GoodsChatCard = ({ message }: ChatCardProps) => {
  const {
    senderId,
    senderNickname,
    message: chatMessage,
    sentAt,
    senderImageUrl,
  } = message

  const isUserChat = senderId === Number(localStorage.getItem('memberId'))

  return (
    <CardContainer $isUserChat={isUserChat}>
      <CardContent>
        <ContentWrapper $isUserChat={isUserChat}>
          <ContentWrapperInner>
            <UserProfileWrapper>
              {!isUserChat && (
                <>
                  <ProfileBedge
                    width={2}
                    height={2}
                    imageSrc={senderImageUrl}
                    isChat
                  />
                  <p>{senderNickname}</p>
                </>
              )}
            </UserProfileWrapper>
            <ContentText $isUserChat={isUserChat}>
              {formatChatContent(chatMessage)}
            </ContentText>
          </ContentWrapperInner>
          <p>{formatChatTime(sentAt)}</p>
        </ContentWrapper>
      </CardContent>
    </CardContainer>
  )
}

export default GoodsChatCard

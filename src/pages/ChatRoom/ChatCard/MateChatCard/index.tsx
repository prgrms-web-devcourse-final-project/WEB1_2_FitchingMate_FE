import ProfileBedge from '@components/ProfileBedge'
import {
  CardContainer,
  CardContent,
  ContentText,
  ContentWrapper,
  ContentWrapperInner,
  UserProfileWrapper,
} from '../style'
import { Message } from '@typings/mateChat'
import { formatChatContent } from '@utils/formatChatContent'
import { formatChatTime } from '@utils/formatDate'

interface ChatCardProps {
  message: Message
}

const MateChatCard = ({ message }: ChatCardProps) => {
  const { senderId, senderNickname, message: chatMessage, sendTime } = message

  const isUserChat = senderId === 1

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
          <p>{formatChatTime(sendTime)}</p>
        </ContentWrapper>
      </CardContent>
    </CardContainer>
  )
}

export default MateChatCard

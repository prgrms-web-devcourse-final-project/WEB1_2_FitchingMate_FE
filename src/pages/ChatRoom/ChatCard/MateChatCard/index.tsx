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
import { MateChatMessage } from '@pages/ChatRoom/Rooms/MateChatRoom'

const MateChatCard = ({ message }: { message: MateChatMessage }) => {
  const { senderId, senderNickname, message: chatMessage, sendTime } = message

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

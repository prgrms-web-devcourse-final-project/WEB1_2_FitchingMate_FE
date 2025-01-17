import ProfileBedge from '@components/ProfileBedge'
import {
  CardContainer,
  CardContent,
  ContentText,
  ContentWrapper,
  ContentWrapperInner,
  UserProfileWrapper,
} from './style'
import { Message } from '@typings/mateChat'

interface ChatCardProps {
  isUserChat: boolean
  message: Message
}

const ChatCard = ({ isUserChat, message }: ChatCardProps) => {
  const { senderId, senderNickname, message: chatMessage, sendTime } = message

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
              안녕하세요 빌터입니다.안녕하세요 빌터입니다.안녕하세요
              빌터입니다.안녕하세요 빌터입니다.안녕하세요 빌터입니다.안녕하세요
              빌터입니다.안녕하세요 빌터입니다.안녕하세요 빌터입니다.안녕하세요
            </ContentText>
          </ContentWrapperInner>
          <p>오후 6:58</p>
        </ContentWrapper>
      </CardContent>
    </CardContainer>
  )
}

export default ChatCard

import ProfileBedge from '@components/ProfileBedge'
import {
  CardContainer,
  CardContent,
  ContentText,
  ContentWrapper,
} from './style'

const ChatCard = ({ isUserChat }: { isUserChat: boolean }) => {
  return (
    <CardContainer $isUserChat={isUserChat}>
      <CardContent>
        {!isUserChat && (
          <ProfileBedge
            width={2.5}
            height={2.5}
            isChat
          />
        )}
        <ContentWrapper $isUserChat={isUserChat}>
          <div>
            {!isUserChat && <p>빌터</p>}
            <ContentText $isUserChat={isUserChat}>
              안녕하세요 빌터입니다.안녕하세요 빌터입니다.안녕하세요
              빌터입니다.안녕하세요 빌터입니다.안녕하세요 빌터입니다.안녕하세요
              빌터입니다.안녕하세요 빌터입니다.안녕하세요 빌터입니다.안녕하세요
            </ContentText>
          </div>
          <p>오후 6:58</p>
        </ContentWrapper>
      </CardContent>
    </CardContainer>
  )
}

export default ChatCard

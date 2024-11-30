import ProfileBedge from '@components/ProfileBedge'
import {
  CardContainer,
  CardContent,
  ContentText,
  ContentWrapper,
  ContentWrapperInner,
  UserProfileWrapper,
} from './style'

const ChatCard = ({ isUserChat }: { isUserChat: boolean }) => {
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
                  <p>빌터</p>
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

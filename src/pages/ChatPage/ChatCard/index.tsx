import {
  Card,
  ChatContent,
  ContentContainer,
  ExitButton,
  ProfileWrap,
  UserInfoContainer,
} from './style'

import { CHAT_TAB_LIST } from '../index'

import ProfileBedge from '@components/ProfileBedge'
import ChatExit from '@assets/icon/exit_line.svg?react'
import useNavigatChatRoom from '@hooks/useNavigatChatRoom'

interface ChatCardProps {
  currentTab: (typeof CHAT_TAB_LIST)[number]
  onExitClick: () => void
}

const ChatCard = ({ currentTab, onExitClick }: ChatCardProps) => {
  const { handleChatCardClick, isGoods, isGeneral } =
    useNavigatChatRoom(currentTab)

  return (
    <Card>
      <ContentContainer onClick={handleChatCardClick}>
        <ProfileWrap>
          <ProfileBedge
            width={3.125}
            height={3.125}
            isChat
          />
          {!isGeneral && <img src='https://placehold.co/40x40' />}
        </ProfileWrap>

        <ChatContent>
          <UserInfoContainer>
            <h2>삐삐 푸들</h2>
            {isGoods && <p>상남동 · 1주 전</p>}
          </UserInfoContainer>
          <p>경비실 앞에 있겠습니다</p>
        </ChatContent>
      </ContentContainer>

      <ExitButton onClick={onExitClick}>
        <ChatExit
          width={20}
          height={20}
        />
      </ExitButton>
    </Card>
  )
}

export default ChatCard

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
import { GoodsChatroomContent } from '@typings/db'
import { formatChatTime } from '@utils/formatDate'
import { useGoodsChatStore } from '@store/useGoodsChatStore'

interface ChatCardProps {
  currentTab: (typeof CHAT_TAB_LIST)[number]
  onExitClick: () => void
  goodsChatroomContent: GoodsChatroomContent
}

const ChatCard = ({
  currentTab,
  onExitClick,
  goodsChatroomContent,
}: ChatCardProps) => {
  const { handleChatCardClick, isGoods } = useNavigatChatRoom(currentTab)

  const {
    opponentImageUrl,
    goodsMainImageUrl,
    opponentNickname,
    lastChatSentAt,
    lastChatContent,
    chatRoomId,
  } = goodsChatroomContent

  /**
   * 알럿 창 띄울때 채팅방 id 저장
   * 채팅방 삭제를 위한 채팅방 id 저장
   */
  const { setCurrentChatRoomId } = useGoodsChatStore()

  const handleExitClick = () => {
    setCurrentChatRoomId(chatRoomId.toString())
    onExitClick()
  }

  return (
    <Card>
      <ContentContainer onClick={() => handleChatCardClick(chatRoomId)}>
        <ProfileWrap>
          {opponentImageUrl ? (
            <ProfileBedge
              width={3.125}
              height={3.125}
              isChat
              imageSrc={opponentImageUrl}
            />
          ) : (
            <ProfileBedge
              width={3.125}
              height={3.125}
              isChat
            />
          )}
          {goodsMainImageUrl && <img src={goodsMainImageUrl} />}
        </ProfileWrap>

        <ChatContent>
          <UserInfoContainer>
            <h2>{opponentNickname}</h2>
            {isGoods && <p>{formatChatTime(lastChatSentAt)}</p>}
          </UserInfoContainer>
          <p>{lastChatContent}</p>
        </ChatContent>
      </ContentContainer>

      <ExitButton onClick={handleExitClick}>
        <ChatExit
          width={20}
          height={20}
        />
      </ExitButton>
    </Card>
  )
}

export default ChatCard

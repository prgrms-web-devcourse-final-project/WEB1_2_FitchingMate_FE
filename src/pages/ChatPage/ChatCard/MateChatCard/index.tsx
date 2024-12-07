import {
  Card,
  ChatContent,
  ContentContainer,
  ExitButton,
  UserInfoContainer,
} from '../style'

import { ProfileWrap } from './style'

import ChatExit from '@assets/icon/exit_line.svg?react'
import useNavigatChatRoom from '@hooks/useNavigatChatRoom'
import { formatChatTime } from '@utils/formatDate'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import { MateChatRoomList } from '@typings/mateChat'

interface ChatCardProps {
  onExitClick: () => void
  mateChatroomContent: MateChatRoomList
}

const MateChatCard = ({ onExitClick, mateChatroomContent }: ChatCardProps) => {
  const { handleChatCardClick } = useNavigatChatRoom('메이트')

  const {
    postImageUrl,
    postTitle,
    lastMessageContent,
    lastMessageTime,
    roomId,
  } = mateChatroomContent

  /**
   * 알럿 창 띄울때 채팅방 id 저장
   * 채팅방 삭제를 위한 채팅방 id 저장
   */
  const { setCurrentChatRoomId } = useGoodsChatStore()

  const handleExitClick = () => {
    setCurrentChatRoomId(roomId.toString())
    onExitClick()
  }

  return (
    <Card>
      <ContentContainer onClick={() => handleChatCardClick(roomId)}>
        <ProfileWrap>
          <img src={postImageUrl} />
        </ProfileWrap>

        <ChatContent>
          <UserInfoContainer>
            <h2>{postTitle}</h2>
            <p>{formatChatTime(lastMessageTime)}</p>
          </UserInfoContainer>
          <p>{lastMessageContent}</p>
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

export default MateChatCard

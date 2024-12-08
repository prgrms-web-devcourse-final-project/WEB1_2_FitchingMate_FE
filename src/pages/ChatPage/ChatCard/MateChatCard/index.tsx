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
import { MateChatRoomList } from '@typings/mateChat'
import { useMateChatStore } from '@store/useMateChatStore'

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
    postId,
  } = mateChatroomContent

  /**
   * setMateChatRoomId
   * 알럿 창 띄울때 채팅방 id 저장
   * 채팅방 삭제를 위한 채팅방 id 저장
   */
  const { setMateChatRoomId } = useMateChatStore()

  const handleExitClick = () => {
    setMateChatRoomId(roomId.toString())
    onExitClick()
  }

  const handleCardClick = () => {
    handleChatCardClick(roomId, postId)
  }

  return (
    <Card>
      <ContentContainer onClick={handleCardClick}>
        <ProfileWrap>
          <img src={postImageUrl} />
        </ProfileWrap>

        <ChatContent>
          <UserInfoContainer>
            <h2>{postTitle}</h2>
            <p>{lastMessageTime ? formatChatTime(lastMessageTime) : ''}</p>
          </UserInfoContainer>
          <p>
            {lastMessageContent
              ? lastMessageContent
              : '아직 진행된 대화가 없습니다'}
          </p>
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

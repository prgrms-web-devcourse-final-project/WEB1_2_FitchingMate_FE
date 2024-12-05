import { ChatType } from '@pages/ChatPage'
import {
  ChatBottomModalContainer,
  Section,
  SubmitButtonContainer,
} from '@pages/ChatRoom/style'

import { useGoodsChatStore } from '@store/useGoodsChatStore'
import { useQuery } from '@tanstack/react-query'
import goodsChatService from '@apis/goodsChatService'
import GoodsUserCard from '../GoodsUserCard'

interface ChatBottomModalProps {
  handleAlertClick: () => void
  currentChatType: ChatType
}

const GoodsModalContent = ({ handleAlertClick }: ChatBottomModalProps) => {
  const { isOwner, isTrade, goodsAlertStatus, setGoodsAlertStatus } =
    useGoodsChatStore()

  const {
    data: userList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['goodsChatParticipantList'],
    queryFn: () => goodsChatService.goodsParticipantList(1),
  })

  const handleExitChatClick = () => {
    setGoodsAlertStatus({ type: 'CHAT_EXIT' })
    handleAlertClick()
  }

  const handleCompleteClick = () => {
    setGoodsAlertStatus({ type: 'DEAL_COMPLETE', userName: '빌터' })
    handleAlertClick()
  }

  return (
    <ChatBottomModalContainer>
      <Section>
        <h2>대화상대</h2>
        <div>
          {userList?.map((user) => (
            <GoodsUserCard
              key={user.memberId}
              user={user}
            />
          ))}
        </div>
      </Section>
      <SubmitButtonContainer $isOwner={isOwner}>
        <button onClick={handleExitChatClick}>채팅방 나가기</button>
        <button
          onClick={handleCompleteClick}
          disabled={!isOwner}
        >
          {isOwner ? '거래완료' : ''}
        </button>
      </SubmitButtonContainer>
    </ChatBottomModalContainer>
  )
}

export default GoodsModalContent

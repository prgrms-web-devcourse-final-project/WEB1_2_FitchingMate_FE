import {
  ChatBottomModalContainer,
  GoodsSubmitButtonContainer,
  Section,
} from '@pages/ChatRoom/style'

import { useGoodsChatStore } from '@store/useGoodsChatStore'
import { useQuery } from '@tanstack/react-query'
import goodsChatService from '@apis/goodsChatService'
import GoodsUserCard from '../GoodsUserCard'
import { QUERY_KEY } from '@apis/queryClient'

interface ChatBottomModalProps {
  handleAlertClick: () => void
  chatRoomId: string
}

const GoodsModalContent = ({
  handleAlertClick,
  chatRoomId,
}: ChatBottomModalProps) => {
  const {
    setGoodsAlertStatus,
    currentSellerId,
    setCurrentBuyerId,
    currentBuyerId,
  } = useGoodsChatStore()

  const {
    data: userList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.GOODS_CHAT_PARTICIPANT],
    queryFn: () => goodsChatService.goodsParticipantList(chatRoomId),
  })

  const buyerNickname = userList?.find(
    (user) => user.memberId !== Number(localStorage.getItem('memberId')),
  )?.nickname

  const isOwner =
    userList?.find((user) => user.memberId === currentSellerId)?.memberId ===
    Number(localStorage.getItem('memberId'))

  const buyerId = userList?.find(
    (user) => user.memberId !== Number(localStorage.getItem('memberId')),
  )?.memberId

  // const

  // const {
  //   completeGoodsPost,
  // const {
  //   completeGoodsPost,
  //   isCompleteGoodsPostPending,
  //   isCompleteGoodsPostError,
  //   completeGoodsPostError,
  // } = useCompletePost()

  const handleExitChatClick = () => {
    setGoodsAlertStatus({ type: 'CHAT_EXIT' })
    handleAlertClick()
  }

  const handleCompleteClick = () => {
    setGoodsAlertStatus({ type: 'DEAL_COMPLETE', userName: buyerNickname })
    setCurrentBuyerId(buyerId as number)
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
      <GoodsSubmitButtonContainer $isOwner={isOwner as boolean}>
        <button onClick={handleExitChatClick}>채팅방 나가기</button>
        {isOwner && <button onClick={handleCompleteClick}>거래완료</button>}
      </GoodsSubmitButtonContainer>
    </ChatBottomModalContainer>
  )
}

export default GoodsModalContent

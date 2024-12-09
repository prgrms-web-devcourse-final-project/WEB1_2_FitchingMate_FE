import { GlobalFloatAside } from '@styles/globalStyle'

import GoodsListCard from '@components/GoodsListCard'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'
import { ChatCardContainer, EnterChatMessage } from '../../style'
import GoodsModalContent from './GoodsModalContent'

import { useModal } from '@hooks/useModal'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import ALERT_MESSAGE from '@constants/alertMessage'

import goodsChatService from '@apis/goodsChatService'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { formatChatContent } from '@utils/formatChatContent'
import { useGoodsChatExit } from '@hooks/useChatExit'
import { useParams } from 'react-router-dom'
import { useSocket } from '@hooks/useSocket'
import GoodsChatCard from '@pages/ChatRoom/ChatCard/GoodsChatCard'
import { useEffect, useRef, useState } from 'react'
import { GoodsChatMessage } from '@typings/db'
import { createBrowserHistory } from 'history'
import { useCompleteGoodsPost } from '@hooks/useCompletePost'
import { ToastContainer } from 'react-toastify'
import GoodsChatInput from './GoodsChatInput'
import useGetGoodsPost from '@hooks/usegetGoodsPost'

const GoodsChatRoom = () => {
  const [currentMessageList, setCurrentMessageList] = useState<
    GoodsChatMessage[]
  >([])

  const [fetchMore, setFetchMore] = useState(false)

  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const {
    goodsAlertStatus,
    currentPostId,
    currentBuyerId,
    setCurrentPostId,
    setCurrentSellerId,
  } = useGoodsChatStore()

  const { type: chatType, id: chatRoomId } = useParams()

  /**
   * 채팅방 상세 조회
   * 채팅방 상세 조회 성공 시 쿼리 데이터 갱신
   */

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_CHATROOM, chatRoomId],
    queryFn: () => goodsChatService.getGoodsChatroom(chatRoomId as string),
  })

  const { data: goodsChatData } = useInfiniteQuery({
    queryKey: [QUERY_KEY.GOODS_CHAT, chatRoomId],
    queryFn: ({ pageParam }) =>
      goodsChatService.getChatMessage(chatRoomId as string, pageParam),
    initialPageParam: 1,

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,

    enabled: fetchMore,
  })

  /**
   * 채팅방 나가기
   * 채팅방 나가기 버튼 클릭 시 호출
   * 채팅방 나가기 성공 시 쿼리 데이터 갱신
   */

  const IS_CHAT_ROOM = true

  const {
    goodsExitMutate,
    isGoodsExitPending,
    isGoodsExitError,
    goodsExitError,
  } = useGoodsChatExit(chatRoomId as string, IS_CHAT_ROOM)

  const {
    completeGoodsPost,
    isCompleteGoodsPostPending,
    isCompleteGoodsPostError,
    completeGoodsPostError,
  } = useCompleteGoodsPost(
    currentPostId as number,
    currentBuyerId as number,
    chatRoomId as string,
  )

  /**
   * 소켓 연결 훅
   *
   * @param chatType 채팅방 타입
   * @param chatRoomId 채팅방 아이디
   *
   * @returns submitChat 함수
   *
   * handleMessage 함수
   * 채팅 데이터가 업데이트 될 때마다 스테이트에 관리
   */

  const handleMessage = (message: GoodsChatMessage) => {
    setCurrentMessageList((prev) => {
      if (prev.length >= 20) {
        const startIndex = 0
        const endIndex = currentMessageList.length - 1
        const prevSlice = prev.slice(startIndex, endIndex)

        return [message, ...prevSlice]
      }

      return [message, ...prev]
    })
  }

  const { submitChat } = useSocket({
    chatType: chatType as string,
    chatRoomId: chatRoomId as string,
    onListen: handleMessage,
  })

  /**
   * 스크롤 관련 처리
   *
   * 채팅 데이터가 업데이트 될 때마다 스크롤을 최하단으로 이동
   */
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentMessageList.length > 0 && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [currentMessageList])

  useEffect(() => {
    if (data) {
      const { goodsSellerId, goodsPostId, initialMessages } = data

      setCurrentPostId(goodsPostId)
      setCurrentSellerId(goodsSellerId)
      setCurrentMessageList(initialMessages.content)
    }
  }, [data])

  /**
   * 뒤로가기 이벤트 처리
   *
   * 사용자가 뒤로가기 버튼을 눌렀을 때 채팅방 데이터를 초기화
   */
  const history = createBrowserHistory()

  useEffect(() => {
    history.listen((location) => {
      if (location.action === 'POP' || location.action === 'PUSH') {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.GOODS_CHATROOM, chatRoomId],
        })

        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.GOODS_CHAT_LIST],
        })
      }
    })
  }, [chatRoomId])

  if (!data || !chatRoomId || !submitChat) return null

  const {
    imageUrl,
    title,
    price,
    postStatus,
    category,
    teamName,
    chatRoomStatus,
    goodsPostId,
  } = data

  const formatData = {
    imageUrls: [imageUrl],
    title,
    price,
    status: postStatus,
    category,
    teamName,
    id: goodsPostId,
  }

  const currentAlertMessage = () => {
    const { type, userName } = goodsAlertStatus
    const message = ALERT_MESSAGE[type]

    if (typeof message === 'function') {
      return message(userName || '')
    }

    return message
  }

  const alertHandler = () => {
    if (goodsAlertStatus.type === 'CHAT_EXIT') {
      goodsExitMutate()
    }

    if (goodsAlertStatus.type === 'DEAL_COMPLETE') {
      completeGoodsPost()
    }
  }

  return (
    <>
      <GoodsListCard goodsPost={formatData} />

      <ChatCardContainer ref={chatContainerRef}>
        {[...currentMessageList]?.reverse().map((message) =>
          message.messageType !== '대화' ? (
            <EnterChatMessage key={message.chatMessageId}>
              {formatChatContent(message.message)}
            </EnterChatMessage>
          ) : (
            <GoodsChatCard
              key={message.chatMessageId}
              message={message}
            />
          ),
        )}
      </ChatCardContainer>

      <GlobalFloatAside>
        <GoodsChatInput
          handleOpenBottomModal={handleOpenBottomModal}
          submitChat={submitChat}
          postStatus={postStatus}
          chatRoomStatus={chatRoomStatus}
        />
      </GlobalFloatAside>

      <BottomModal ref={bottomModalRef}>
        <GoodsModalContent
          handleAlertClick={handleAlertClick}
          chatRoomId={chatRoomId}
        />
      </BottomModal>

      <Alert
        ref={alertRef}
        {...currentAlertMessage()}
        handleAlertClick={alertHandler}
      />
      <ToastContainer />
    </>
  )
}

export default GoodsChatRoom

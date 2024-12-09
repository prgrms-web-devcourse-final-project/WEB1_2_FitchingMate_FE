import { useMutation } from '@tanstack/react-query'
import mateChatService from '@apis/mateChatService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import goodsChatService from '@apis/goodsChatService'
import { useNavigate } from 'react-router-dom'

export const useCreateMateChatRoom = (matePostId: string) => {
  const navigate = useNavigate()
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => mateChatService.createMateChat(matePostId),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_CHAT_LIST] })

      if (data.status === 'SUCCESS') {
        navigate(`/chat-room/메이트/${data.data.roomId}`, {
          state: { postId: matePostId },
        })

        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.MATE_CHATROOM, data.data.roomId],
        })
      }
    },
  })

  return {
    createChatRoom: mutate,
    createIsPending: isPending,
    createIsError: isError,
    createError: error,
  }
}

/**
 * 굿즈 채팅방 생성 요청
 *
 * @param buyerId 구매자 아이디 ( 본인 회원 ID)
 * @param goodsPostId 굿즈 게시글 아이디
 *
 * 체크완료 추후 수정 필요
 */

export const useCreateGoodsChatroom = (
  buyerId: number,
  goodsPostId: string,
) => {
  const navigate = useNavigate()

  const {
    mutate: createGoodsChatroom,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: () =>
      goodsChatService.createGoodsChatroom(buyerId, goodsPostId),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_CHAT_LIST] })

      if (data.status === 'SUCCESS') {
        navigate(`/chat-room/굿즈/${data.data.chatRoomId}`)

        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.GOODS_CHATROOM, data.data.chatRoomId],
        })
      }
    },
  })

  return {
    createGoodsChatroom,
    createGoodsChatroomIsPending: isPending,
    createGoodsChatroomIsError: isError,
    createGoodsChatroomError: error,
  }
}

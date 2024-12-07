import { useMutation } from '@tanstack/react-query'
import mateChatService from '@apis/mateChatService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import goodsChatService from '@apis/goodsChatService'

export const useCreateMateChatRoom = (matePostId: string) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => mateChatService.createMateChat(matePostId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_CHAT_LIST] })
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
  const {
    mutate: createGoodsChatroom,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: () =>
      goodsChatService.createGoodsChatroom(buyerId, goodsPostId),

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  return {
    createGoodsChatroom,
    createGoodsChatroomIsPending: isPending,
    createGoodsChatroomIsError: isError,
    createGoodsChatroomError: error,
  }
}

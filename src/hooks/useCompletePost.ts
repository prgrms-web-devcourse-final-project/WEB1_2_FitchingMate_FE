import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

export const useCompletePost = (
  goodsPostId: string,
  buyerId: string,
  chatRoomId: string,
) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => goodsPostService.completeGoodsPost(goodsPostId, buyerId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.GOODS_POST, goodsPostId],
      })

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.GOODS_CHATROOM, chatRoomId],
      })
    },
  })

  return {
    completeGoodsPost: mutate,
    isCompleteGoodsPostPending: isPending,
    isCompleteGoodsPostError: isError,
    completeGoodsPostError: error,
  }
}

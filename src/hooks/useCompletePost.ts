import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { toast } from 'react-toastify'

export const useCompletePost = (
  goodsPostId: string,
  buyerId: string,
  chatRoomId: string,
) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () =>
      goodsPostService.completeGoodsPost(Number(goodsPostId), Number(buyerId)),

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

export const useCompleteGoodsPost = (
  goodsPostId: number,
  buyerId: number,
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

      toast.success('거래가 완료되었습니다. 거래후기를 남겨주세요.')
    },
  })

  return {
    completeGoodsPost: mutate,
    isCompleteGoodsPostPending: isPending,
    isCompleteGoodsPostError: isError,
    completeGoodsPostError: error,
  }
}

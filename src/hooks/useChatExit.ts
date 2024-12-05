import goodsChatService from '@apis/goodsChatService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useMutation } from '@tanstack/react-query'

export const useGoodsChatExit = (chatRoomId: string) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => goodsChatService.exitGoodsChat(chatRoomId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_CHAT_LIST] })
    },

    onSettled: (data, error) => {
      if (error) {
        console.error(error)
      }
      console.log(data)
    },
  })

  return {
    goodsExitMutate: mutate,
    isGoodsExitPending: isPending,
    isGoodsExitError: isError,
    goodsExitError: error,
  }
}

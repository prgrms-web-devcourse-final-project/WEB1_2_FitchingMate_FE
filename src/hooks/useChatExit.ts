import goodsChatService from '@apis/goodsChatService'
import mateChatService from '@apis/mateChatService'
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

export const useMateChatExit = (chatRoomId: string) => {
  console.log(chatRoomId)
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => mateChatService.exitMateChat(chatRoomId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_CHAT_LIST] })
    },
  })

  return {
    mateExitMutate: mutate,
    isMateExitPending: isPending,
    isMateExitError: isError,
    mateExitError: error,
  }
}

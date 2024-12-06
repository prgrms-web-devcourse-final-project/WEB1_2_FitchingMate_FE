import { useMutation } from '@tanstack/react-query'
import goodsChatService from '@apis/goodsChatService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

const useExitGoodsChat = (chatRoomId: string) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => goodsChatService.exitGoodsChat(chatRoomId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.GOODS_CHAT_LIST],
      })
    },

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  return {
    exitGoodsChat: mutate,
    exitGoodsChatIsPending: isPending,
    exitGoodsChatIsError: isError,
    exitGoodsChatError: error,
  }
}

export default useExitGoodsChat

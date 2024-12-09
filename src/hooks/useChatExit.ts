import goodsChatService from '@apis/goodsChatService'
import mateChatService from '@apis/mateChatService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useGoodsChatExit = (chatRoomId: string, isChatRoom?: boolean) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => goodsChatService.exitGoodsChat(chatRoomId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_CHAT_LIST] })

      if (isChatRoom) {
        navigate('/chat?type=굿즈')
      }
    },

    onError: (error) => {
      toast.error(error.message)
    },
  })

  return {
    goodsExitMutate: mutate,
    isGoodsExitPending: isPending,
    isGoodsExitError: isError,
    goodsExitError: error,
  }
}

export const useMateChatExit = (chatRoomId: string, isChatRoom?: boolean) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => mateChatService.exitMateChat(chatRoomId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_CHAT_LIST] })

      if (isChatRoom) {
        navigate('/chat')
      }
    },

    onError: (error) => {
      toast.error(error.message)
    },
  })

  return {
    mateExitMutate: mutate,
    isMateExitPending: isPending,
    isMateExitError: isError,
    mateExitError: error,
  }
}

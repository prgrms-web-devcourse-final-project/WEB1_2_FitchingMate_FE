import { useQuery } from '@tanstack/react-query'

import goodsChatService from '@apis/goodsChatService'
import { QUERY_KEY } from '@apis/queryClient'
import mateChatService from '@apis/mateChatService'

export const useGoodsChatPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_CHAT_LIST],
    queryFn: () => goodsChatService.getGoodsChatroomList(0, 10),
  })

  return {
    goodsChatList: data,
    goodsChatListLoading: isLoading,
    goodsChatListError: isError,
    goodsChatListErrorMessage: error,
  }
}

export const useMateChatPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.MATE_CHAT_LIST],
    queryFn: () => mateChatService.getMateChatRoomList(),
  })

  return {
    mateChatList: data,
    mateChatListLoading: isLoading,
    mateChatListError: isError,
    mateChatListErrorMessage: error,
  }
}

import { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { useQuery } from '@tanstack/react-query'

const useGetUserInfo = (userId: number | null) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: [QUERY_KEY.USER_INFO, userId],
    queryFn: async () => userService.getUserInfo(userId),
  })

  return { getUserInfo: data, isPending, isError, error }
}

export default useGetUserInfo

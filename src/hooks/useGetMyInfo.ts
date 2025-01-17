import { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { useQuery } from '@tanstack/react-query'

const useGetMyInfo = (userId: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: [QUERY_KEY.MY_INFO, userId],
    queryFn: async () => userService.getMyInfo(userId),
  })

  console.log(data)

  return { getMyInfo: data, isPending, isError, error }
}

export default useGetMyInfo

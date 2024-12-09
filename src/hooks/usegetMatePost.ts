import { useQuery } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import { QUERY_KEY } from '@apis/queryClient'

const useGetMatePost = (matePostId: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.MATE_POST, matePostId],
    queryFn: () => matePostService.getMatePost(matePostId.toString()),

    enabled: !!matePostId,
  })

  return {
    matePost: data,
    matePostLoading: isLoading,
    matePostError: isError,
    matePostErrorMessage: error,
  }
}

export default useGetMatePost

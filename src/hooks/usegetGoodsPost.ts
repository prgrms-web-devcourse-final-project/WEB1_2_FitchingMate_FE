import goodsPostService from '@apis/goodsPostService'
import { QUERY_KEY } from '@apis/queryClient'
import { useQuery } from '@tanstack/react-query'

const useGetGoodsPost = (goodsPostId?: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_POST, goodsPostId],
    queryFn: () => {
      if (!goodsPostId) {
        return null
      }

      return goodsPostService.getGoodsPost(goodsPostId)
    },
    enabled: !!goodsPostId,
  })

  return {
    goodsPost: data,
    goodsPostLoading: isLoading,
    goodsPostError: isError,
    goodsPostErrorMessage: error,
  }
}

export default useGetGoodsPost

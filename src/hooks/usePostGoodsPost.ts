import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
interface UsePostGoodsPostProps {
  memberId: number
  goodsPostId?: number
}

const mutationCallback = (
  memberId: number,
  formData: FormData,
  goodsPostId?: number,
) => {
  if (goodsPostId) {
    return goodsPostService.editGoodsPost(memberId, goodsPostId, formData)
  }

  return goodsPostService.postGoodsPost(memberId, formData)
}

const usePostGoodsPost = ({ memberId, goodsPostId }: UsePostGoodsPostProps) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) =>
      mutationCallback(memberId, formData, goodsPostId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_POST] })
      navigate(ROUTE_PATH.GOODS_LIST)
    },
  })

  return { mutateGoodsPost: mutate, isPending, isError, error }
}

export default usePostGoodsPost

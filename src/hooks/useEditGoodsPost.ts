import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

interface UseEditGoodsPostProps {
  memberId: number
  goodsPostId: number
}

const useEditGoodsPost = ({ memberId, goodsPostId }: UseEditGoodsPostProps) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) =>
      goodsPostService.editGoodsPost(memberId, goodsPostId, formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_LIST] })
      navigate(ROUTE_PATH.GOODS_LIST)
    },

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  return {
    mutateEditGoodsPost: mutate,
    isEditPending: isPending,
    isEditError: isError,
    editError: error,
  }
}

export default useEditGoodsPost

import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

/**
 * 굿즈 게시글 등록 및 수정 요청 훅
 *
 * @param memberId 회원 아이디
 *
 * 추후 멤버 아이디 빠질 예정
 *
 * @returns
 */

const usePostGoodsPost = () => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) =>
      goodsPostService.postGoodsPost(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_LIST] })
      navigate(ROUTE_PATH.GOODS_LIST)
    },

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  return {
    mutateGoodsPost: mutate,
    isPostPending: isPending,
    isPostError: isError,
    postError: error,
  }
}

export default usePostGoodsPost

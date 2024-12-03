import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

interface UsePostGoodsPostProps {
  memberId: number
  goodsPostId?: number
}

/**
 * 굿즈 게시글 등록 및 수정 요청
 *
 * @param memberId 회원 아이디
 * @param formData 게시글 데이터
 * @param goodsPostId 게시글 아이디
 *
 * @returns
 */
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

/**
 * 굿즈 게시글 등록 및 수정 요청 훅
 *
 * @param memberId 회원 아이디
 * @param goodsPostId 게시글 아이디
 *
 * 추후 멤버 아이디 빠질 예정
 *
 * @returns
 */
const usePostGoodsPost = ({ memberId, goodsPostId }: UsePostGoodsPostProps) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) =>
      mutationCallback(memberId, formData, goodsPostId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_LIST] })
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.GOODS_POST, goodsPostId],
      })
    },

    onSettled: () => {
      navigate(ROUTE_PATH.GOODS_LIST)
    },
  })

  return { mutateGoodsPost: mutate, isPending, isError, error }
}

export default usePostGoodsPost

import queryClient, { QUERY_KEY } from '@apis/queryClient'
import reviewService from '@apis/reviewService'
import userService from '@apis/userService'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useMutateMateReview = () =>
  useMutation({
    mutationFn: (data: {
      memberId: number
      matePostId: number
      jsonData: unknown
    }) =>
      reviewService.postMateReview(
        data.memberId,
        data.matePostId,
        data.jsonData,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_REVIEW] })
    },
  })

export const useMutateGoodsReview = () =>
  useMutation({
    mutationFn: (data: {
      reviewerId: number
      goodsPostId: number
      jsonData: unknown
    }) =>
      reviewService.postGoodsReview(
        data.reviewerId,
        data.goodsPostId,
        data.jsonData,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_REVIEW] })
    },
  })

export const useGetReviewDetail = (
  reviewType: 'GOODS' | 'MATE',
  postId: number,
) =>
  useQuery({
    queryKey: [QUERY_KEY.REVIEW_DATA, reviewType],
    queryFn: () => reviewService.getReviewDetailData(postId, reviewType),
  })

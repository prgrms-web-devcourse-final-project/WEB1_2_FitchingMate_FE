import { useMutation } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

/**
 * 메이트 게시글 생성 및 수정 함수
 * @param matePostId 게시글 아이디
 * @param formData 게시글 데이터
 * @param memberId 멤버 아이디
 * @returns
 *
 * 멤버 아이디가 있으면 수정, 없으면 생성
 * 아마 추후에는 isEdit 상태로 확인할듯
 */

const mutationCallback = (
  matePostId: number,
  formData: FormData,
  memberId?: number,
) => {
  if (memberId) {
    return matePostService.editMatePost(memberId, matePostId, formData)
  }

  return matePostService.postMatePost(formData)
}

interface UsePostMatePostProps {
  matePostId: number
  memberId?: number
}

/**
 * 메이트 게시글 생성 및 수정 훅
 * @param matePostId 게시글 아이디
 * @param memberId 멤버 아이디
 * @returns
 *
 * 아마 추후에는 isEdit 상태로 확인할듯
 */

const usePostMatePost = ({ matePostId, memberId }: UsePostMatePostProps) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) => {
      if (memberId) {
        return mutationCallback(matePostId, formData, memberId)
      }

      return mutationCallback(matePostId, formData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_POST] })
    },

    onSettled: () => {
      navigate(ROUTE_PATH.MATE_LIST)
    },
  })

  return { mutatePost: mutate, isPending, isError, error }
}

export default usePostMatePost

import { useMutation } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

/**
 * 메이트 게시글 수정 함수
 *
 * @param memberId 멤버 아이디
 * @param matePostId 게시글 아이디
 * @returns
 *
 */

interface UseEditMatePostProps {
  matePostId: number
}

const useEditMatePost = ({ matePostId }: UseEditMatePostProps) => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) =>
      matePostService.editMatePost(matePostId, formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MATE_POST, matePostId],
      })
      navigate(ROUTE_PATH.MATE_LIST)
    },

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  return {
    mutateEditMatePost: mutate,
    isEditPending: isPending,
    isEditError: isError,
    editError: error,
  }
}

export default useEditMatePost

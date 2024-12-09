import { useMutation } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

const usePostMatePost = () => {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (formData: FormData) =>
      matePostService.postMatePost(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_LIST] })

      navigate(ROUTE_PATH.MATE_LIST, {
        state: { isPostSuccess: true },
      })
    },

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  return {
    mutatePost: mutate,
    isPostPending: isPending,
    isPostError: isError,
    postError: error,
  }
}

export default usePostMatePost

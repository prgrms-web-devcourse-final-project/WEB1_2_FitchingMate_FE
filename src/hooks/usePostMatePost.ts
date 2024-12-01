import { useMutation } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

const usePostMatePost = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (formData: FormData) => matePostService.postMatePost(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_POST] })
    },
    onSettled: (data, error) => {
      console.log(data, error)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { mutatePost: mutate, isPending, isError, error }
}

export default usePostMatePost

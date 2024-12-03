import queryClient, { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { useMutation } from '@tanstack/react-query'

const useEditMyInfo = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (formData: FormData) => userService.editMyInfo(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MY_INFO] })
    },
    onSettled: (data, error) => {
      console.log(data, error)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { mutateMyInfo: mutate, isPending, isError, error }
}

export default useEditMyInfo

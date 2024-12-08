import queryClient, { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const useEditMyInfo = () => {
  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: (formData: FormData) => userService.editMyInfo(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MY_INFO, 1] })
      toast('정보 수정이 완료되었습니다.')
    },
    onSettled: (data, error) => {
      console.log(data, error)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { mutateMyInfo: mutate, isPending, isError, error, isSuccess }
}

export default useEditMyInfo

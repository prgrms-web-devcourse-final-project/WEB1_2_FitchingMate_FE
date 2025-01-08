import queryClient, { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { kboTeamInfo } from '@constants/kboInfo'
import { useMutation } from '@tanstack/react-query'
import { ProfileEditApiResponse, ProfileEditResponse } from '@typings/db'
import { toast } from 'react-toastify'

const useEditMyInfo = (memberId: number) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (formData: FormData) => userService.editMyInfo(formData),
    onSuccess: (data) => {
      const response: ProfileEditResponse = data.data
      localStorage.setItem('teamId', String(kboTeamInfo[response.teamName].id))
      localStorage.setItem('nickname', response.nickname)
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MY_INFO, memberId] })
      toast('정보 수정이 완료되었습니다.')
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

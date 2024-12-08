import mateChatService from '@apis/mateChatService'
import { useMutation } from '@tanstack/react-query'
import { RecruitStatus } from '@pages/ChatRoom/Rooms/MateChatRoom/RecruitStatusSection'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

interface RecruitData {
  status: RecruitStatus
  participantIds: number[]
}

export const useChangeMateRecruitStatus = () => {
  const {
    state: { postId },
  } = useLocation()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (recruitData: RecruitData) =>
      mateChatService.changeMateRecruitStatus(postId, recruitData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MATE_POST, postId],
      })

      toast.success('모임 상태가 변경되었습니다.', {
        position: 'top-right',
      })
    },
  })

  return {
    changeMateRecruitStatus: mutate,
    isMateRecruitStatusPending: isPending,
    isMateRecruitStatusError: isError,
    mateRecruitStatusError: error,
  }
}

export const useCompleteMatePost = (postId: string) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: { participantIds: number[] }) =>
      mateChatService.completeMate(postId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MATE_POST, postId],
      })
    },
  })

  return {
    completeMatePost: mutate,
    isCompleteMatePostPending: isPending,
    isCompleteMatePostError: isError,
    completeMatePostError: error,
  }
}

import mateChatService from '@apis/mateChatService'
import { useMutation } from '@tanstack/react-query'
import { RecruitStatus } from '@pages/ChatRoom/Rooms/MateChatRoom/RecruitStatusSection'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useLocation } from 'react-router-dom'

interface RecruitData {
  status: RecruitStatus
  participantIds: number[]
}

export const useCompleteMate = () => {
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

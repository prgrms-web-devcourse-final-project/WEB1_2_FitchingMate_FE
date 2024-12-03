import { useMateFormStore } from '@store/useMateFormStore'
import usePostMatePost from './usePostMatePost'
import { parseParticipants } from '@utils/formatParticipants'

interface UseSubmitMatePostProps {
  matePostId: number
  memberId?: number
}

const useSubmitMatePost = ({
  matePostId,
  memberId,
}: UseSubmitMatePostProps) => {
  const { matePost, img } = useMateFormStore()
  const { mutatePost, isPending, isError, error } = usePostMatePost({
    matePostId,
    memberId,
  })

  const handleSubmit = () => {
    const { maxParticipants, ...rest } = matePost

    const requestData = {
      ...rest,
      // 숫자 형태로 변환 필요
      maxParticipants: parseParticipants(maxParticipants),
      // 추후 memberId 식별될 때 뺄 예정
      memberId: Number(localStorage.getItem('memberId')) || 1,
      // 추후 matchId 식별될 때 뺄 예정
      matchId: 1,
    }

    const formData = new FormData()

    formData.append(
      'data',
      new Blob([JSON.stringify(requestData)], {
        type: 'application/json',
      }),
    )

    // 파일이 존재할 경우에만 추가
    if (img instanceof File) {
      formData.append('file', img)
    }

    mutatePost(formData)
  }

  return { handleSubmit, matePost, isPending, isError, error }
}

export default useSubmitMatePost

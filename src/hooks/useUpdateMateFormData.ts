import { useEffect } from 'react'
import useGetMatePost from './usegetMatePost'
import { useMateFormStore } from '@store/useMateFormStore'
import { transformMatePostToFormData } from '@utils/formatPostData'

const useUpdateMateFormData = (matePostId: number) => {
  const { setMateFormData, setImg } = useMateFormStore()

  const { matePost, matePostLoading, matePostError, matePostErrorMessage } =
    useGetMatePost(matePostId)

  useEffect(() => {
    if (matePost) {
      console.log('matePost', matePost)
      const { matePost: formattedMatePost, img } =
        transformMatePostToFormData(matePost)

      // 포매팅된 데이터 스토어 업데이트
      setImg(img)
      setMateFormData(formattedMatePost)
    }
  }, [matePost])

  return {
    matePostLoading,
    matePostError,
    matePostErrorMessage,
  }
}

export default useUpdateMateFormData

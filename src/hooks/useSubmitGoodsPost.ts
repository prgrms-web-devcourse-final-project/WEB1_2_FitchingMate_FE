import { useGoodsFormStore } from '@store/useGoodsFormStore'
import usePostGoodsPost from './usePostGoodsPost'

const useSubmitGoodsPost = () => {
  const { goods, imageList } = useGoodsFormStore()

  const { mutateGoodsPost, isPending, isError, error } = usePostGoodsPost(1)

  const handleSubmit = () => {
    const requestData = {
      ...goods,
      // 숫자 형태로 변환 필요
      price: 1,
    }

    const formData = new FormData()

    formData.append(
      'data',
      new Blob([JSON.stringify(requestData)], {
        type: 'application/json',
      }),
    )

    // 파일이 존재할 경우에만 추가
    if (imageList.length > 0) {
      imageList.forEach((file) => {
        formData.append('files', file)
      })
    }

    console.log(formData.get('files'))

    mutateGoodsPost(formData)
  }

  return { handleSubmit, isPending, isError, error }
}

export default useSubmitGoodsPost

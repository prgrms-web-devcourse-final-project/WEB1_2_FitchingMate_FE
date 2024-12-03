import { useGoodsFormStore } from '@store/useGoodsFormStore'
import usePostGoodsPost from './usePostGoodsPost'
import { removeCommaFromPrice } from '@utils/formatPrice'

interface UseSubmitGoodsPostProps {
  memberId: number
  goodsPostId?: number
}

const useSubmitGoodsPost = ({
  memberId,
  goodsPostId,
}: UseSubmitGoodsPostProps) => {
  const { goods, imageList } = useGoodsFormStore()

  const { mutateGoodsPost, isPending, isError, error } = usePostGoodsPost({
    memberId,
    goodsPostId,
  })

  const handleSubmit = () => {
    const requestData = {
      ...goods,
      // 숫자 형태로 변환 필요
      price: removeCommaFromPrice(goods.price),
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

    mutateGoodsPost(formData)
  }

  return { handleSubmit, isPending, isError, error }
}

export default useSubmitGoodsPost

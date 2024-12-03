import { useGoodsFormStore } from '@store/useGoodsFormStore'
import { transformGoodsDetailToFormData } from '@utils/formatPostData'
import useGetGoodsPost from './usegetGoodsPost'
import { useEffect } from 'react'

const useUpdateFormdata = (goodsPostId?: number) => {
  const { goodsPost, goodsPostLoading, goodsPostError, goodsPostErrorMessage } =
    useGetGoodsPost(goodsPostId)

  const { setGoods, setImageList } = useGoodsFormStore()

  useEffect(() => {
    if (goodsPost) {
      console.log('goodsPost', goodsPost)
      const { goods, imageList } = transformGoodsDetailToFormData(goodsPost)
      console.log('goods', goods)

      setGoods(goods)
      setImageList(imageList)
    }
  }, [goodsPost])

  return {
    goodsPostLoading,
    goodsPostError,
    goodsPostErrorMessage,
  }
}

export default useUpdateFormdata

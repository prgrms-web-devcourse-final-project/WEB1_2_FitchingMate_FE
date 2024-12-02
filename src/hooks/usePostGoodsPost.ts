import { useMutation } from '@tanstack/react-query'
import goodsPostService from '@apis/goodsPostService'

const usePostGoodsPost = (memberId: number) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (formData: FormData) =>
      goodsPostService.postGoodsPost(memberId, formData),

    onSuccess: () => {},

    onSettled: (data, error) => {
      if (data) {
        console.log(data)
      }

      if (error) {
        console.log(error)
      }
    },
  })

  return { mutateGoodsPost: mutate, isPending, isError, error }
}

export default usePostGoodsPost

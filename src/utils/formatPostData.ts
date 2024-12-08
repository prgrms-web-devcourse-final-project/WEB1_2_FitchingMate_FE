import { kboTeamInfo } from '@constants/kboInfo'
import { GoodsDetail, MatePostData } from '@typings/db'
import { formatPriceWithComma, removeCommaFromPrice } from './formatPrice'
import { formatParticipants, parseParticipants } from './formatParticipants'
import { GoodsPost, MatePost } from '@typings/postForm'

export const getTeamIdByName = (teamName: string): number => {
  if (teamName === '전체') return 0

  if (kboTeamInfo[teamName]) {
    return kboTeamInfo[teamName].id
  }

  for (const key in kboTeamInfo) {
    if (kboTeamInfo[key].team.includes(teamName)) {
      return kboTeamInfo[key].id
    }
  }

  return 0
}

export const transformMatePostToFormData = (matePost: MatePostData) => {
  const {
    matchId,
    myTeamName,
    title,
    content,
    age,
    maxParticipants,
    gender,
    transportType,
    postImageUrl,
  } = matePost

  return {
    matePost: {
      teamId: getTeamIdByName(myTeamName),
      title,
      content,
      age,
      maxParticipants: formatParticipants(maxParticipants),
      gender,
      transportType,
      matchId,
    },

    selectedWeek: 2,

    img: postImageUrl,
  }
}

export const transformGoodsDetailToFormData = (goodsDetail: GoodsDetail) => {
  const { teamName, title, category, content, price, location, imageUrls } =
    goodsDetail

  return {
    goods: {
      teamId: getTeamIdByName(teamName),
      title,
      category,
      content,
      price: formatPriceWithComma(price),
      location,
    },
    imageList: imageUrls.map((imageUrl) => new File([], imageUrl)),
  }
}

export const transformMatePostToSubmitData = (
  matePost: MatePost,
  img: File | null,
) => {
  const { maxParticipants, ...rest } = matePost

  const requestData = {
    ...rest,
    // 숫자 형태로 변환 필요
    maxParticipants: parseParticipants(maxParticipants),
    // 추후 memberId 식별될 때 뺄 예정
    memberId: Number(localStorage.getItem('memberId')) || 1,
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

  return formData
}

export const transformGoodsDetailToSubmitData = (
  goods: GoodsPost,
  imageList: File[],
) => {
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

  return formData
}

export const transformMatePostToCardData = (matePost: MatePostData) => {
  const { postImageUrl, rivalMatchTime, ...restData } = matePost

  const cardData = {
    imageUrl: postImageUrl,
    matchTime: rivalMatchTime,
    ...restData,
  }

  return cardData
}

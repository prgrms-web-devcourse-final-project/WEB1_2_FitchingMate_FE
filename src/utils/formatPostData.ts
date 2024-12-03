import { kboTeamInfo } from '@constants/kboInfo'
import { GoodsDetail, MatePostData } from '@typings/db'
import { formatPriceWithComma } from './formatPrice'
import { formatParticipants } from './formatParticipants'

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
      memberId: Number(localStorage.getItem('memberId')) || 1,
      title,
      content,
      age,
      maxParticipants: formatParticipants(maxParticipants),
      gender,
      transportType,
      matchId,
    },
    img: new File([], postImageUrl),
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

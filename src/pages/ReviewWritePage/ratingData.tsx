import Worst from '@assets/character/character-worst.svg?react'
import Normal from '@assets/character/character-normal.svg?react'
import Best from '@assets/character/character-best.svg?react'

export const ratingData = [
  {
    value: 'BAD',
    text: '별로에요',
    svg: Worst,
  },
  {
    value: 'GOOD',
    text: '좋아요!',
    svg: Normal,
  },
  {
    value: 'GREAT',
    text: '최고에요!',
    svg: Best,
  },
]

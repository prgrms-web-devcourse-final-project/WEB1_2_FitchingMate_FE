import Worst from '@assets/character/character-worst.svg?react'
import Normal from '@assets/character/character-normal.svg?react'
import Best from '@assets/character/character-best.svg?react'

export const decideRating = (rating: string) => {
  switch (rating) {
    case 'BAD':
      return <Worst />
    case 'GOOD':
      return <Normal />
    case 'GREAT':
      return <Best />
  }
}

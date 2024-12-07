import Worst from '@assets/character/character-worst.png'
import Normal from '@assets/character/character-normal.png'
import Best from '@assets/character/character-best.png'

export const decideRating = (rating: string) => {
  switch (rating) {
    case '별로예요':
      return (
        <img
          src={Worst}
          alt='별로예요'
        />
      )
    case '좋아요!':
      return (
        <img
          src={Normal}
          alt='좋아요!'
        />
      )
    case '최고예요!':
      return (
        <img
          src={Best}
          alt='최고예요!'
        />
      )
  }
}

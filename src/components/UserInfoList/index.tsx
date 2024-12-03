import FuckingBat from '@assets/icon/baseball.svg?react'

import { DescriptionContainer, ProfileContainer } from './style'
import ProfileBedge from '@components/ProfileBedge'
import { GoodsDetail } from '@typings/db'

interface MateHost {
  manner: number
  nickname: string
  imageUrl: string
}
interface UserInfoListProps {
  seller: MateHost | GoodsDetail['seller']
}

const UserInfoList = ({ seller }: UserInfoListProps) => {
  const { nickname, manner, imageUrl } = seller

  return (
    <DescriptionContainer>
      <ProfileContainer>
        <ProfileBedge
          width={1.875}
          height={1.875}
          isChat={true}
          imageSrc={imageUrl}
        />
        <p>{nickname}</p>
      </ProfileContainer>
      <p>
        {manner}
        <FuckingBat />
      </p>
    </DescriptionContainer>
  )
}

export default UserInfoList

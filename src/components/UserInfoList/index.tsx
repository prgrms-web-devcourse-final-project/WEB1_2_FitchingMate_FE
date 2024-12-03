import FuckingBat from '@assets/icon/baseball.svg?react'

import { DescriptionContainer, ProfileContainer } from './style'
import ProfileBedge from '@components/ProfileBedge'
import { GoodsDetail } from '@typings/db'

const UserInfoList = ({ seller }: { seller: GoodsDetail['seller'] }) => {
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

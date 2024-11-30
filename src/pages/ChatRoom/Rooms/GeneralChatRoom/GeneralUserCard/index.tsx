import ProfileBedge from '@components/ProfileBedge'

import {
  UserInfo,
  UserListCardContainer,
} from '../../GoodsChatRoom/GoodsUserCard/style'

const GeneralUserCard = () => {
  return (
    <UserListCardContainer>
      <UserInfo>
        <ProfileBedge
          height={3}
          width={3}
        />
        <p>
          빌터 <span>(나)</span>
        </p>
      </UserInfo>
    </UserListCardContainer>
  )
}

export default GeneralUserCard

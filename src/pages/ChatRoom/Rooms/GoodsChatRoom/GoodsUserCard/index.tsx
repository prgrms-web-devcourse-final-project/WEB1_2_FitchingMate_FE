import ProfileBedge from '@components/ProfileBedge'
import { UserInfo, UserListCardContainer } from './style'

import { useGoodsChatStore } from '@store/useGoodsChatStore'

const GoodsUserCard = () => {
  const { isOwner } = useGoodsChatStore()

  return (
    <UserListCardContainer>
      <UserInfo>
        <ProfileBedge
          height={3}
          width={3}
        />
        <p>빌터 {isOwner && <span>(판매자)</span>}</p>
      </UserInfo>
    </UserListCardContainer>
  )
}

export default GoodsUserCard

import ProfileBedge from '@components/ProfileBedge'
import { UserInfo, UserListCardContainer } from './style'

import { useGoodsChatStore } from '@store/useGoodsChatStore'

interface GoodsUserCardProps {
  user: {
    memberId: number
    nickname: string
    imageUrl?: string
  }
}

const GoodsUserCard = ({ user }: GoodsUserCardProps) => {
  const { isOwner } = useGoodsChatStore()

  const { memberId, nickname, imageUrl } = user

  return (
    <UserListCardContainer>
      <UserInfo>
        <ProfileBedge
          height={3}
          width={3}
          imageSrc={imageUrl}
          isChat={true}
        />
        <p>
          {nickname} {isOwner && <span>(판매자)</span>}
        </p>
      </UserInfo>
    </UserListCardContainer>
  )
}

export default GoodsUserCard

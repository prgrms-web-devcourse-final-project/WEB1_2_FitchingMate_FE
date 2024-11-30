import ProfileBedge from '@components/ProfileBedge'
import {
  ButtonContainer,
  ExcludeButton,
  UserInfo,
  UserListCardContainer,
} from './style'
import PillButton from '@components/PillButton'
import { useMateChatStore } from '@store/useMateChatStore'

interface MateUserCardProps {
  handleAlertClick: () => void
}

const MateUserCard = ({ handleAlertClick }: MateUserCardProps) => {
  const { isOwner, recruitStatus, setCurrentAlertStatus } = useMateChatStore()

  const handleExcludeClick = () => {
    setCurrentAlertStatus({ type: 'EXCLUDE_USER', userName: '빌터' })
    handleAlertClick()
  }

  const isCompleteRecruit = isOwner && recruitStatus === '직관완료'

  return (
    <UserListCardContainer>
      <UserInfo>
        <ProfileBedge
          height={3}
          width={3}
        />
        <p>빌터 {isOwner && <span>(모임장)</span>}</p>
      </UserInfo>
      <ButtonContainer>
        {isCompleteRecruit && (
          <PillButton
            text='참가확인'
            onClick={() => {}}
            $isSelected={true}
            disabled={false}
          />
        )}
        {isOwner && (
          <ExcludeButton onClick={handleExcludeClick}>X</ExcludeButton>
        )}
      </ButtonContainer>
    </UserListCardContainer>
  )
}

export default MateUserCard

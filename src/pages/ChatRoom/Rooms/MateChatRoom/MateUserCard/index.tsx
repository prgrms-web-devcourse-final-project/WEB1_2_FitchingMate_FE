import ProfileBedge from '@components/ProfileBedge'
import {
  ButtonContainer,
  ConfirmationContainer,
  UserInfo,
  UserListCardContainer,
} from './style'
import { useMateChatStore } from '@store/useMateChatStore'
import { MateChatMember } from '@typings/mateChat'

interface MateUserCardProps {
  member: MateChatMember
}

const MateUserCard = ({ member }: MateUserCardProps) => {
  const {
    recruitStatus,
    confirmedParticipants,
    setConfirmedParticipants,
    isOwner,
  } = useMateChatStore()

  const { imageUrl, nickname, memberId } = member

  // 추후 API 연동 시 추가 예정

  // const handleExcludeClick = () => {
  //   setCurrentAlertStatus({ type: 'EXCLUDE_USER', userName: nickname })
  //   handleAlertClick()
  // }

  const handleConfirmation = () => {
    if (confirmedParticipants.includes(memberId)) {
      const filteredParticipants = confirmedParticipants.filter(
        (id) => id !== memberId,
      )
      setConfirmedParticipants(filteredParticipants)
    } else {
      setConfirmedParticipants([...confirmedParticipants, memberId])
    }
  }

  const isUser = memberId === Number(localStorage.getItem('memberId'))
  const isCompleteRecruit = isOwner && recruitStatus === '직관완료'
  const isMemberOwner = memberId === Number(localStorage.getItem('memberId'))

  return (
    <UserListCardContainer>
      <UserInfo>
        <ProfileBedge
          height={3}
          width={3}
          imageSrc={imageUrl}
          isChat
        />
        <p>
          {nickname} {isUser && <span>(나)</span>}
        </p>
      </UserInfo>
      <ButtonContainer>
        {isCompleteRecruit && (
          <ConfirmationContainer>
            {!isMemberOwner && (
              <>
                <input
                  type='checkbox'
                  id={`confirm-${memberId}`}
                  name={`confirm-${memberId}`}
                  checked={confirmedParticipants.includes(memberId)}
                  onChange={handleConfirmation}
                />
                <label htmlFor={`confirm-${memberId}`}>참가확인</label>
              </>
            )}
          </ConfirmationContainer>
        )}
      </ButtonContainer>
    </UserListCardContainer>
  )
}

export default MateUserCard

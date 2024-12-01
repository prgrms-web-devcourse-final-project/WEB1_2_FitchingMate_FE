import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  BedgeContainer,
  Description,
  CardImageWrap,
} from './style'
import Placeholder from '@assets/default/placeholder.svg?react'
import CardBedge from '@components/CardBedge'
import { kboTeamInfo } from '@constants/kboInfo'

interface MateCardProps {
  card: {
    imageUrl: string
    myTeamName: string
    rivalTeamName: string
    matchTime: string
    location: string
    maxParticipants: number
    status: string
    age: string
    gender: string
    transportType: string
  }
}

const MateCard = ({ card }: MateCardProps) => {
  const {
    imageUrl,
    myTeamName,
    rivalTeamName,
    matchTime,
    location,
    maxParticipants,
    status,
    age,
    gender,
    transportType,
  } = card
  const teamInfo = kboTeamInfo[myTeamName]

  return (
    <CardContainer>
      <CardImageWrap>
        {imageUrl ? <img src={imageUrl} alt={myTeamName} /> : <Placeholder />}
      </CardImageWrap>

      <CardContent>
        <CardContentLeft>
          <Description>
            <p>{myTeamName} 메이트</p>
            <p>상대팀: {rivalTeamName}</p>
            <p>{new Date(matchTime).toLocaleString()} - {location}</p>
          </Description>
          <BedgeContainer>
            {/* 마이팀 뱃지 */}
            <CardBedge text={myTeamName} style={{ backgroundColor: teamInfo.color }} />
            {/* 나이 뱃지 */}
            <CardBedge text={age} />
            {/* 성별 뱃지 */}
            <CardBedge text={gender} />
            {/* 교통수단 뱃지 */}
            <CardBedge text={transportType} />
          </BedgeContainer>
        </CardContentLeft>

        <CardContentRight>
          <CardBedge text={status} />
          <p>{maxParticipants}명</p>
        </CardContentRight>
      </CardContent>
    </CardContainer>
  )
}

export default MateCard

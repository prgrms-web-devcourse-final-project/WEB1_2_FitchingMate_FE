import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  BedgeContainer,
  Description,
} from './style'
import CardBedge from '@components/CardBedge'
import { formatMatchTime } from '@utils/formatDate'

interface MateDetailCardProps {
  title: string
  rivalTeamName: string
  location: string
  status: string
  maxParticipants: number
  myTeamName: string
  rivalMatchTime: string
}

const MateDetailCard = ({
  title,
  rivalTeamName,
  location,
  status,
  maxParticipants,
  myTeamName,
  rivalMatchTime,
}: MateDetailCardProps) => {
  return (
    <CardContainer>
      <CardContent>
        {/* 경기정보 */}
        <CardContentLeft>
          <Description>
            <p>{title}</p>
            <p>상대팀 : {rivalTeamName}</p>
            <p>
              {formatMatchTime(rivalMatchTime)} - {location}
            </p>
          </Description>
          <BedgeContainer>
            <CardBedge text={myTeamName} />
            <CardBedge />
          </BedgeContainer>
        </CardContentLeft>

        {/* 모집정보 */}
        <CardContentRight>
          <CardBedge text={status} />
          <p>{maxParticipants}명</p>
        </CardContentRight>
      </CardContent>
    </CardContainer>
  )
}

export default MateDetailCard

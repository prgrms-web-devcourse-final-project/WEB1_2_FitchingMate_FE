import { Bedge } from './style'
import { kboTeamInfo } from '@constants/kboInfo'

const CardBedge = ({ text }: { text?: string }) => {
  const teamColor =
    text && kboTeamInfo[text] ? kboTeamInfo[text].color : undefined
  return <Bedge bgcolor={teamColor}>{text || '벳지'}</Bedge>
}

export default CardBedge

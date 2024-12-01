import MateCard from '@components/MateCard'
import { MateCardContainer } from './style'
import { useNavigate, Link } from 'react-router-dom'
import { kboTeamInfo } from '@constants/kboInfo'

interface MateCardSectionProps {
  selectedTeam: string
  mateCards: any[]
}

const MateCardSection = ({ selectedTeam, mateCards }: MateCardSectionProps) => {
  const navigate = useNavigate()
  const teamName = kboTeamInfo[selectedTeam]?.team || 'KBO'

  return (
    <MateCardContainer>
      <h3>{`${teamName} 메이트 찾기`}</h3>
      {mateCards.map((card, index) => (
        <MateCard key={index} card={card} />
      ))}
      <Link to='/matelist'>더보기</Link>
    </MateCardContainer>
  )
}

export default MateCardSection

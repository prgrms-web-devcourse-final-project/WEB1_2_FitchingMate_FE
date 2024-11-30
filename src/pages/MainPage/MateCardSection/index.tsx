import MateCard from '@components/MateCard'
import { kboTeamInfo } from '@constants/kboInfo'
import { MateCardContainer } from './style'
import { useNavigate } from 'react-router-dom'

interface MateCardSectionProps {
  selectedTeam: string
}

const MateCardSection = ({ selectedTeam }: MateCardSectionProps) => {
  const navigate = useNavigate()
  return (
    <MateCardContainer>
      <h3>{`${kboTeamInfo[selectedTeam].team} 메이트 찾기`}</h3>
      <MateCard />
      <MateCard />
      <MateCard />
      <p
        className='more'
        onClick={() => navigate('/')}
      >
        더보기
      </p>
    </MateCardContainer>
  )
}

export default MateCardSection

import MateCard from '@components/MateCard'
import { kboTeamInfo } from '@utils/kboInfo'
import { MateCardContainer } from './style'
import { useNavigate } from 'react-router-dom'

const MateCardSection = () => {
  const navigate = useNavigate()
  return (
    <MateCardContainer>
      <h3>{`${kboTeamInfo.삼성.team} 메이트 찾기`}</h3>
      <MateCard />
      <MateCard />
      <MateCard />
      <p className='more' onClick={() => navigate('/')}>
        더보기
      </p>
    </MateCardContainer>
  )
}

export default MateCardSection

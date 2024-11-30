import GoodsCard from '@components/GoodsCard'
import { GoodsCardContainer, CardWrapper } from './style'
import { kboTeamInfo } from '@constants/kboInfo'
import { useNavigate } from 'react-router-dom'

interface GoodsCardSectionProps {
  selectedTeam: string
}

const GoodsCardSection = ({ selectedTeam }: GoodsCardSectionProps) => {
  const navigate = useNavigate()
  return (
    <GoodsCardContainer>
      <h3>{`${kboTeamInfo[selectedTeam].team} 상품 찾기`}</h3>
      <CardWrapper>
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </CardWrapper>
      <p
        className='more'
        onClick={() => navigate('/')}
      >
        더보기
      </p>
    </GoodsCardContainer>
  )
}

export default GoodsCardSection

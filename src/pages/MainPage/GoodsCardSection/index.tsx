import GoodsCard from '@components/GoodsCard'
import { GoodsCardContainer, CardWrapper } from './style'
import { kboTeamInfo } from '@utils/kboInfo'
import { useNavigate } from 'react-router-dom'

const GoodsCardSection = () => {
  const navigate = useNavigate()
  return (
    <GoodsCardContainer>
      <h3>{`${kboTeamInfo.삼성.team} 상품 찾기`}</h3>
      <CardWrapper>
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </CardWrapper>
      <p className='more' onClick={() => navigate('/')}>
        더보기
      </p>
    </GoodsCardContainer>
  )
}

export default GoodsCardSection

import GoodsCard from '@components/GoodsCard'
import { GoodsCardContainer, CardWrapper } from './style'
import { kboTeamInfo } from '@constants/kboInfo'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import fetchApi from '@apis/ky'

interface GoodsCardSectionProps {
  selectedTeam: string
}

interface GoodsPostSummary {
  id: number
  teamName: string
  title: string
  category: string
  price: number
  imageUrl: string
}

const GoodsCardSection = ({ selectedTeam }: GoodsCardSectionProps) => {
  const [goodsCards, setGoodsCards] = useState<GoodsPostSummary[]>([]) // 굿즈 카드 데이터
  const [isLoading, setIsLoading] = useState(false) // 로딩 상태
  const [isEmpty, setIsEmpty] = useState(false) // 데이터 없음 여부

  // API 호출 함수
  const fetchGoods = async (team: string) => {
    const teamId = kboTeamInfo[team]?.id
    const url = team === '전체' 
      ? 'goods/main' 
      : `goods/main?teamId=${teamId}`


    setIsLoading(true) // 로딩 시작
    setIsEmpty(false) // 데이터 없음 초기화
    try {
      const response: any = await fetchApi.get(url).json() // API 호출
      console.log('굿즈 응답 데이터:', url, response) // 응답 데이터 확인

      if (response.status === 'SUCCESS') {
        setGoodsCards(response.data) // 데이터 저장
        setIsEmpty(response.data.length === 0) // 데이터 없음 여부 설정
      }
    } catch (error: any) {
      console.error('API 요청 실패:', error.message || error) // 에러 처리
      setIsEmpty(true) // 에러 발생 시 데이터 없음 처리
    } finally {
      setIsLoading(false) // 로딩 종료
    }
  }

  // 팀 변경 시 데이터 요청
  useEffect(() => {
    console.log('선택된 팀:', selectedTeam) // 선택된 팀 확인
    fetchGoods(selectedTeam)
  }, [selectedTeam])

  return (
    <GoodsCardContainer>
      <h3>{`${kboTeamInfo[selectedTeam]?.team} 상품 찾기`}</h3>
      {isLoading ? (
        <p>로딩 중...</p> // 로딩 상태 표시
      ) : isEmpty ? (
        <p>굿즈 카드를 찾을 수 없습니다.</p> // 데이터 없음 메시지
      ) : (
        <CardWrapper>
          {goodsCards.map((card) => (
            <GoodsCard key={card.id} card={card} /> // 굿즈 카드 컴포넌트 렌더링
          ))}
        </CardWrapper>
      )}
      <Link to='/goodslist'>더보기</Link> {/* 더보기 링크 */}
    </GoodsCardContainer>
  )
}

export default GoodsCardSection

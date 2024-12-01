import { useState, useEffect } from 'react'
import { MainPageContainer, TeamSelectWrapper } from './style'
import TeamSelectSection from '@components/TeamSelectSection'
import MatchUpSection from './MatchUpSection'
import MateCardSection from './MateCardSection'
import GoodsCardSection from './GoodsCardSection'
import RankingSection from './RankingSection'
import { kboTeamInfo } from '@constants/kboInfo'
import fetchApi from '@apis/ky'

const MainPage = () => {
  const [selectedTeam, setSelectedTeam] = useState('전체') // 초기값은 '전체'
  const [mateCards, setMateCards] = useState([]) // 메이트 카드 데이터
  const [isLoading, setIsLoading] = useState(false) // 로딩 상태
  const [isEmpty, setIsEmpty] = useState(false) // 데이터 비어있는지 여부

  const fetchMates = async (team: string) => {
    const teamId = kboTeamInfo[team]?.id

    const url = team === '전체' 
      ? 'mates/main' 
      : `mates/main?teamId=${teamId}`

    setIsLoading(true) // 로딩 시작
    setIsEmpty(false) // 초기화
    try {
      // TODO: ApiResponse 타입을 정의하여 any 대신 명확한 타입으로 변경해야 함.
      const response: any = await fetchApi.get(url).json()
      if (response.status === 'SUCCESS') {
        console.log('메이트 카드 조회:', url,response.data)
        const filteredCards = response.data.filter((card: any) =>
          ['OPEN', 'CLOSED'].includes(card.status)
        )
        setMateCards(filteredCards)
        setIsEmpty(filteredCards.length === 0) // 데이터 없으면 true로 설정
      }
    } catch (error: any) {
      console.error('Failed to fetch mate cards:', error.message || error)
      setIsEmpty(true) // 에러 발생 시 데이터 없음 상태로 처리
    } finally {
      setIsLoading(false) // 로딩 종료
    }
  }

  useEffect(() => {
    fetchMates(selectedTeam)
  }, [selectedTeam])

  return (
    <MainPageContainer>
      <MatchUpSection />
      <TeamSelectWrapper>
        <TeamSelectSection selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      </TeamSelectWrapper>
      {isLoading ? (
        <p>로딩 중...</p> // 로딩 상태 표시
      ) : isEmpty ? (
        <p>메이트 카드를 찾을 수 없습니다.</p> // 데이터 없음 메시지
      ) : (
        <MateCardSection selectedTeam={selectedTeam} mateCards={mateCards} />
      )}
      <GoodsCardSection selectedTeam={selectedTeam} />
      <RankingSection />
    </MainPageContainer>
  )
}

export default MainPage

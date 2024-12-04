import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import fetchApi from '@apis/ky'
import { QUERY_KEY } from '@apis/queryClient'
import { Match } from '@typings/db'
import { formatMatchTime } from '@utils/formatDate'
import { ErrorContainer } from '../ResultSection/ResultList/style'
import {
  GameDatetimeLocation,
  TeamVersus,
  LocationWeather,
  UpdateInfo,
  Weather,
  MatchUpContainer,
  PaginationContainer,
} from './style'
import { kboTeamInfo } from '@constants/kboInfo'

interface MatchUpSectionProps {
  selectedTeam: string
}

const fetchMatches = async (teamId: number | null): Promise<Match[]> => {
  const endpoint = teamId === null ? 'matches/main' : `matches/team/${teamId}`
  const response: any = await fetchApi.get(endpoint).json()
  console.log(
    '매치업',
    `${import.meta.env.VITE_API_ENDPOINT}${endpoint}`,
    response,
  )
  return response.data
}

const MatchUpSection = ({ selectedTeam }: MatchUpSectionProps) => {
  const teamId = selectedTeam === '전체' ? null : kboTeamInfo[selectedTeam].id

  const { data: matches = [], isLoading } = useQuery({
    queryKey: [QUERY_KEY.WEEKLY_MATCH, teamId],
    queryFn: () => fetchMatches(teamId),
    enabled: !!teamId || selectedTeam === '전체',
  })

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (matches.length === 0) {
    return (
      <ErrorContainer>{`${kboTeamInfo[selectedTeam]?.team}의 매치업 데이터가 없습니다.`}</ErrorContainer>
    )
  }

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {matches.map((match) => {
          // 팀 ID를 기반으로 kboTeamInfo에서 데이터 조회
          const homeTeamData = Object.values(kboTeamInfo).find(
            (team) => team.id === match.homeTeam.id,
          )
          const awayTeamData = Object.values(kboTeamInfo).find(
            (team) => team.id === match.awayTeam.id,
          )

          const HomeTeamLogo = homeTeamData?.logo
          const AwayTeamLogo = awayTeamData?.logo

          const homeTeamColor = homeTeamData?.color || '#ccc'
          const awayTeamColor = awayTeamData?.color || '#ccc'

          return (
            <SwiperSlide key={match.id}>
              <MatchUpContainer
                $homeColor={homeTeamColor}
                $awayColor={awayTeamColor}
              >
                <GameDatetimeLocation>
                  <span>
                    {formatMatchTime(match.matchTime)} - {match.location}
                  </span>
                </GameDatetimeLocation>
                <TeamVersus>
                  <div>
                    {HomeTeamLogo && (
                      <HomeTeamLogo
                        width={50}
                        height={50}
                      />
                    )}
                  </div>
                  <span>vs</span>
                  <div>
                    {AwayTeamLogo && (
                      <AwayTeamLogo
                        width={50}
                        height={50}
                      />
                    )}
                  </div>
                </TeamVersus>
                <LocationWeather>
                  <UpdateInfo>
                    {match.weather &&
                      ` (${formatMatchTime(match.weather.wtTime)} 기준)`}
                  </UpdateInfo>
                  {match.weather && (
                    <Weather>
                      {match.weather.temperature}°C, {match.weather.pop}% 강수
                      확률
                    </Weather>
                  )}
                </LocationWeather>
              </MatchUpContainer>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <PaginationContainer className='custom-pagination' />
    </>
  )
}

export default MatchUpSection

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
import { kboTeamInfo, kboTeamList } from '@constants/kboInfo'

interface MatchUpSectionProps {
  selectedTeam: number
}

const fetchMatches = async (teamId: number): Promise<Match[]> => {
  const endpoint = teamId === 0 ? 'matches/main' : `matches/team/${teamId}`
  const response: any = await fetchApi.get(endpoint).json()
  return response.data
}

const MatchUpSection = ({ selectedTeam }: MatchUpSectionProps) => {
  const teamId = selectedTeam === 0 ? 0 : kboTeamList[selectedTeam].id

  if (selectedTeam !== 0 && !kboTeamList[selectedTeam].id) {
    return (
      <ErrorContainer>잘못된 팀 선택입니다. 다시 시도해주세요.</ErrorContainer>
    )
  }

  const { data: matches = [], isLoading } = useQuery({
    queryKey: [QUERY_KEY.WEEKLY_MATCH, teamId],
    queryFn: () => fetchMatches(teamId),
    enabled: !!teamId || selectedTeam === 0,
  })

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (matches.length === 0) {
    return (
      <ErrorContainer>{`${kboTeamList[selectedTeam]?.team}의 매치업 데이터가 없습니다.`}</ErrorContainer>
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
                    {match.location}
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

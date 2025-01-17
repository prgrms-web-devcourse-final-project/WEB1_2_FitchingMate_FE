import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'

import {
  GameDatetimeLocation,
  TeamVersus,
  LocationWeather,
  UpdateInfo,
  Weather,
  MatchUpContainer,
  //   PaginationContainer,
} from './style'
import { kboTeamInfo } from '@constants/kboInfo'

const matchData = [
  {
    homeTeam: '삼성',
    awayTeam: 'LG',
    gameDateTime: '11월 26일 18시 30분',
    location: '대구 삼성 라이온즈 파크',
    weather: '구름 많음 10°C',
    lastUpdated: '15시',
  },
]

const MatchUpSection = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // pagination={{
        //   el: '.custom-pagination',
        //   clickable: true,
        // }}
        // modules={[Pagination]}
      >
        {matchData.map((match, index) => {
          const homeTeamColor = kboTeamInfo[match.homeTeam].color
          const awayTeamColor = kboTeamInfo[match.awayTeam].color

          return (
            <SwiperSlide key={index}>
              <MatchUpContainer
                homeColor={homeTeamColor}
                awayColor={awayTeamColor}
              >
                <GameDatetimeLocation>
                  <span>
                    {match.gameDateTime} - {match.location}
                  </span>
                </GameDatetimeLocation>
                <TeamVersus>
                  <div>
                    {React.createElement(kboTeamInfo[match.homeTeam].logo)}
                  </div>
                  <span>vs</span>
                  <div>
                    {React.createElement(kboTeamInfo[match.awayTeam].logo)}
                  </div>
                </TeamVersus>
                <LocationWeather>
                  <UpdateInfo>
                    {match.location}({match.lastUpdated} 기준)
                  </UpdateInfo>
                  <Weather>{match.weather}</Weather>
                </LocationWeather>
              </MatchUpContainer>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <PaginationContainer className="custom-pagination" />  */}
    </>
  )
}

export default MatchUpSection

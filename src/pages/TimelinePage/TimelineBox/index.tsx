import {
  TimelineBoxTopText,
  TimelineBoxWrap,
  TimelineColorBox,
  TimelineRotate,
} from '../style'

import Rotate from '@assets/icon/down_white.svg?react'
import TimelineBoxBottom from '../TimelineBoxBottom'
import { useState } from 'react'
import { MatchInfo } from '../types'
import dayjs from 'dayjs'
import { formatTimelineDate } from '@utils/formatDate'
import { kboTeamInfo } from '@constants/kboInfo'

interface TimelineBoxPropTypes {
  info: MatchInfo
}

const TimelineBox = ({ info }: TimelineBoxPropTypes) => {
  const { awayTeamName, homeTeamName, location, matchTime, reviews } = info
  const [visible, setVisible] = useState(false)
  const date = dayjs(matchTime).format('YYYY년 MM월 DD일')
  const $homeColor = kboTeamInfo[homeTeamName].color
  const $awayColor = kboTeamInfo[awayTeamName].color

  return (
    <TimelineBoxWrap
      onClick={() => {
        setVisible(!visible)
      }}
    >
      <h2>{formatTimelineDate(matchTime)}</h2>
      <TimelineColorBox
        $homeColor={$homeColor}
        $awayColor={$awayColor}
      >
        <TimelineBoxTopText>
          <div>
            <span>{date}</span>
            <h3>
              {homeTeamName} VS {awayTeamName}
            </h3>
            <span>{location}</span>
          </div>
          <TimelineRotate className={visible ? 'on' : null}>
            <Rotate />
          </TimelineRotate>
        </TimelineBoxTopText>
        {visible ? <TimelineBoxBottom review={reviews} /> : null}
      </TimelineColorBox>
    </TimelineBoxWrap>
  )
}

export default TimelineBox

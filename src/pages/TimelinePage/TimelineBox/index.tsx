import {
  TimelineBoxTopText,
  TimelineBoxWrap,
  TimelineColorBox,
  TimelineRotate,
} from '../style'

import Rotate from '@assets/icon/down_white.svg?react'
import TimelineBoxBottom from '../TimelineBoxBottom'
import { useState } from 'react'
import { MatchInfo } from '..'

interface TimelineBoxPropTypes {
  info: MatchInfo
}

const TimelineBox = ({ info }: TimelineBoxPropTypes) => {
  const [visible, setVisible] = useState(false)
  console.log(info.review_list)

  return (
    <TimelineBoxWrap
      onClick={(e) => {
        setVisible(!visible)
      }}
    >
      <h2>2024.11.13</h2>
      <TimelineColorBox>
        <TimelineBoxTopText>
          <div>
            <span>{info.match_time}</span>
            <h3>
              {info.home_team_id} VS {info.away_team_id}
            </h3>
            <span>{info.location}</span>
          </div>
          <TimelineRotate className={visible ? 'on' : null}>
            <Rotate />
          </TimelineRotate>
        </TimelineBoxTopText>
        {visible ? <TimelineBoxBottom review={info.review_list} /> : null}
      </TimelineColorBox>
    </TimelineBoxWrap>
  )
}

export default TimelineBox

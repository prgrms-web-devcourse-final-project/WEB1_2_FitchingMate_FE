import { TimelineWrap } from './style'
import TimelineBox from './TimelineBox'

import { data } from './mockData'
import { useState } from 'react'
import { MatchInfo } from './types'

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState<any>(data)

  return (
    <TimelineWrap>
      {data.map((match, index) => {
        return (
          <TimelineBox
            info={match}
            key={index}
          />
        )
      })}
    </TimelineWrap>
  )
}

export default TimelinePage

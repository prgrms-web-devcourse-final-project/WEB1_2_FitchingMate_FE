import { TimelineWrap } from './style'
import TimelineBox from './TimelineBox'

import { data } from './mockData'
import { useCallback, useState } from 'react'
import { MatchInfo } from './types'

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState(data.slice(0, 5))

  return (
    <TimelineWrap>
      {timelineData.map((match, index) => {
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

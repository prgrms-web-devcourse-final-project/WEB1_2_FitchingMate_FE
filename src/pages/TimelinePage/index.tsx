import { TimelineWrap } from './style'
import TimelineBox from './TimelineBox'

import { data } from './mockData'

export interface Review {
  isReviewed: boolean
  username?: string
  review_content?: string
  rating?: 'GOOD' | 'GREAT' | 'BAD' | undefined
}
export interface MatchInfo {
  match_time: string
  home_team_id: string
  away_team_id: string
  location: string
  review_list: Review[]
}

const TimelinePage = () => {
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

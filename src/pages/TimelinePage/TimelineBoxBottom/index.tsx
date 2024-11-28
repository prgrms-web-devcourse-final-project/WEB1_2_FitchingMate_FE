import {
  TimelineBottomBox,
  TimelineBottomImage,
  TimelineReviewWrap,
  TimelineReviewBox,
  TimelineReviewer,
  TimelineReviewInner,
  TimelineSendReview,
} from '../style'

import Worst from '@assets/character/character-worst.svg?react'
import Normal from '@assets/character/character-normal.svg?react'
import Best from '@assets/character/character-best.svg?react'
import Arena from '@assets/default/area.png'
import { MatchInfo, Review } from '..'

interface TimelineBottomPropTypes {
  review: Review[]
}

const TimelineBoxBottom = ({ review }: TimelineBottomPropTypes) => {
  const decideRating = (rating: string) => {
    switch (rating) {
      case 'BAD':
        return <Worst />
      case 'GOOD':
        return <Normal />
      case 'GREAT':
        return <Best />
    }
  }

  return (
    <TimelineBottomBox>
      <TimelineBottomImage
        src={Arena}
        alt='임시'
      />
      <h2>같이 본 메이트</h2>
      <TimelineReviewWrap>
        {review.map((info, index) => {
          return (
            <TimelineReviewBox>
              <div>
                <TimelineReviewer>{info.username}</TimelineReviewer>
                <TimelineReviewInner>
                  {info.review_content && info.review_content}
                </TimelineReviewInner>
              </div>
              <div>
                {info.isReviewed ? (
                  typeof info.rating === 'string' && decideRating(info.rating)
                ) : (
                  <TimelineSendReview>후기 보내기</TimelineSendReview>
                )}
              </div>
            </TimelineReviewBox>
          )
        })}
      </TimelineReviewWrap>
    </TimelineBottomBox>
  )
}

export default TimelineBoxBottom

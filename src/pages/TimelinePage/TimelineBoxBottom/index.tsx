import {
  TimelineBottomBox,
  TimelineBottomImage,
  TimelineReviewWrap,
  TimelineReviewBox,
  TimelineReviewer,
  TimelineReviewInner,
  TimelineSendReview,
} from '../style'

import Arena from '@assets/default/area.png'
import { Review } from '../types'
import { Link } from 'react-router-dom'
import { decideRating } from '../methods'

interface TimelineBottomPropTypes {
  review: Review[]
}

const TimelineBoxBottom = ({ review }: TimelineBottomPropTypes) => {
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
                  <TimelineSendReview>
                    <Link to={'/review/write'}>후기 보내기</Link>
                  </TimelineSendReview>
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

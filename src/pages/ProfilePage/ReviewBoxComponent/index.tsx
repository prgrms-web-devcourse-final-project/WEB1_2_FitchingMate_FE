import LinkIcon from '@assets/icon/link.svg?react'
import { ReviewWrap, ReviewBox, ReviewLinkBox } from '../style'

import { formatReviewPageTime } from '@utils/formatDate'

import { Link } from 'react-router-dom'
import { ReviewContent } from '@typings/reviewPage'

const RATING = {
  BAD: '별로예요',
  GOOD: '좋아요!',
  GREAT: '최고예요!',
}

const ReviewBoxComponent = ({
  reviewList,
  selectedReview,
}: {
  reviewList: ReviewContent[]
  selectedReview: string
}) => {
  return (
    <ReviewWrap>
      {reviewList ? (
        reviewList.map((data, index) => {
          return (
            <ReviewBox key={index}>
              <span>{RATING[data.rating]}</span>
              <p>{data.content}</p>
              <em>
                {data.nickname} · {formatReviewPageTime(data.createdAt)}
              </em>
              <ReviewLinkBox>
                <Link to={'/'}>
                  <div>
                    <span>
                      {selectedReview === '2' && '직관후기'}
                      {selectedReview === '1' && '굿즈거래'}
                    </span>
                    <i>{data.title}</i>
                  </div>
                  <LinkIcon />
                </Link>
              </ReviewLinkBox>
            </ReviewBox>
          )
        })
      ) : (
        <div>데이터가 비어있습니다</div>
      )}
    </ReviewWrap>
  )
}

export default ReviewBoxComponent

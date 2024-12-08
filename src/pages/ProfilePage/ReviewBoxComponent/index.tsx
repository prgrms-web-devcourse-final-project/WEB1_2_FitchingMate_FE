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
  const decideLink = (reviewType: string, postId: number) => {
    if (reviewType && reviewType === '2') {
      return `/mate-detail/${postId}`
    } else if (reviewType && reviewType === '1') {
      return `/goods-detail/${postId}`
    }
  }
  return (
    <ReviewWrap>
      {reviewList && reviewList.length !== 0 ? (
        reviewList.map((data, index) => {
          return (
            <ReviewBox key={index}>
              <span>{RATING[data.rating]}</span>
              <p>{data.content}</p>
              <em>
                {data.nickname} · {formatReviewPageTime(data.createdAt)}
              </em>
              <ReviewLinkBox>
                <Link to={decideLink(selectedReview, data.postId)}>
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
        <div>아직 받은 후기가 없습니다</div>
      )}
    </ReviewWrap>
  )
}

export default ReviewBoxComponent

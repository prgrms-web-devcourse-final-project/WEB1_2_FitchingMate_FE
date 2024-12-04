import React, { useState } from 'react'
import {
  ReviewRatingWrap,
  ReviewSendButtonWrap,
  ReviewWriteWrap,
} from './style'

import GlobalButton from '@components/GlobalButton'
import { GlobalFloatAside } from '@styles/globalStyle'
import ReviewSelectBox from './ReviewSelectBox'
import ReviewPostInfo from './ReviewPostInfo'
import ReviewTextarea from './ReviewTextarea'
import { useMutation } from '@tanstack/react-query'
import reviewService from '@apis/reviewService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'

interface ReviewPagePropTypes {
  reviewType: 'GOODS' | 'MATE'
  title: string
  username: string
}

const ReviewWritePage = ({
  reviewType,
  title,
  username,
}: ReviewPagePropTypes) => {
  const [reviewerId, setReviewerId] = useState(3)
  const [selectedRating, setSelectedRating] = useState('')
  const [reviewContent, setReviewContent] = useState('')

  // 서브밋 펑션
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (reviewType === 'MATE') {
      const jsonData = {
        revieweeId: reviewerId,
        rating: selectedRating,
        content: reviewContent,
      }

      postMateReview({
        memberId: reviewerId,
        matePostId: 4,
        jsonData: JSON.stringify(jsonData),
      })
    } else {
      const jsonData = {
        rating: selectedRating,
        reviewContent: reviewContent,
      }

      postGoodsReview({
        reviewerId: reviewerId,
        goodsPostId: 4,
        jsonData: JSON.stringify(jsonData),
      })
    }
  }

  // 후기 레이팅 체인지
  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(e.target.id)
  }

  // 후기 컨텐츠 체인지
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewContent(e.target.value)
  }

  // 메이트 리뷰 뮤테이트 함수
  const {
    mutate: postMateReview,
    isPending: mateIsPending,
    isError: mateIsError,
    error: mateError,
  } = useMutation({
    mutationFn: (data: {
      memberId: number
      matePostId: number
      jsonData: unknown
    }) =>
      reviewService.postMateReview(
        data.memberId,
        data.matePostId,
        data.jsonData,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_REVIEW] })
    },
  })

  // 굿즈 리뷰 뮤테이트 함수
  const {
    mutate: postGoodsReview,
    isPending: goodsIsPeding,
    isError: goodsIsError,
    error: goodsError,
  } = useMutation({
    mutationFn: (data: {
      reviewerId: number
      goodsPostId: number
      jsonData: unknown
    }) =>
      reviewService.postGoodsReview(
        data.reviewerId,
        data.goodsPostId,
        data.jsonData,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_REVIEW] })
    },
  })

  return (
    <ReviewWriteWrap
      onSubmit={(e) => {
        onSubmit(e)
      }}
    >
      <ReviewPostInfo
        title={title}
        reviewType={reviewType}
        username={username}
      />
      <ReviewRatingWrap>
        <p>
          빌터님,
          <br />
          {reviewType === 'GOODS' ? (
            <>{username}님과 거래가 어떠셨나요?</>
          ) : (
            <>{username}님과 직관은 어떠셨나요?</>
          )}
        </p>
        <span>
          {reviewType === 'GOODS' ? (
            <>거래 선호도는 나만 볼 수 있어요.</>
          ) : (
            <>메이트 선호도는 나만 볼 수 있어요.</>
          )}
        </span>
        <ReviewSelectBox
          onRadioChange={onRadioChange}
          selectedRating={selectedRating}
        />
      </ReviewRatingWrap>
      <ReviewTextarea
        reviewType={reviewType}
        textareaValue={reviewContent}
        onTextareaChange={onTextareaChange}
      />
      <GlobalFloatAside>
        <ReviewSendButtonWrap>
          <GlobalButton
            $isNavy={true}
            text='후기 보내기'
          />
        </ReviewSendButtonWrap>
      </GlobalFloatAside>
    </ReviewWriteWrap>
  )
}

export default ReviewWritePage

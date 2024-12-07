import React, { useEffect, useState } from 'react'
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
import { useMutation, useQuery } from '@tanstack/react-query'
import reviewService from '@apis/reviewService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useLocation } from 'react-router-dom'
import userService from '@apis/userService'
import useGetUserInfo from '@hooks/useGetUserInfo'
import {
  useGetReviewDetail,
  useMutateGoodsReview,
  useMutateMateReview,
} from '@hooks/useReviewHooks'

interface ReviewPagePropTypes {
  reviewType: 'GOODS' | 'MATE'
  title: string
  username: string
}

const ReviewWritePage = ({}) => {
  const location = useLocation()
  const [reviewType, setReviewType] = useState(location.state.type)
  const [myId, setMyId] = useState(0)
  const [revieweeId, setRevieweeId] = useState(location.state.memberId)
  const [postId, setPostId] = useState(location.state.postId)
  const [reviewerName, setReviewerName] = useState()
  const [selectedRating, setSelectedRating] = useState('')
  const [reviewContent, setReviewContent] = useState('')

  // 서브밋 펑션
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (reviewType === 'MATE') {
      const jsonData = {
        revieweeId: revieweeId,
        rating: selectedRating,
        content: reviewContent,
      }

      postMateReview({
        memberId: myId,
        matePostId: postId,
        jsonData: JSON.stringify(jsonData),
      })
    } else {
      const jsonData = {
        rating: selectedRating,
        reviewContent: reviewContent,
      }

      postGoodsReview({
        reviewerId: myId,
        goodsPostId: postId,
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
  } = useMutateMateReview()

  // 굿즈 리뷰 뮤테이트 함수
  const {
    mutate: postGoodsReview,
    isPending: goodsIsPeding,
    isError: goodsIsError,
    error: goodsError,
  } = useMutateGoodsReview()

  // 포스트 정보 불러오는 함수
  const {
    data: reviewDetailData,
    isPending: reviewIsPending,
    isError: reviewIsError,
    error: reviewError,
  } = useGetReviewDetail(reviewType, postId)

  // 리뷰 대상 정보 불러오는 함수
  const {
    getUserInfo: userData,
    isPending: userIsPending,
    isError: userIsError,
    error: userError,
  } = useGetUserInfo(revieweeId)

  useEffect(() => {
    if (userData) {
      setReviewerName(userData.nickname)
    }
  }, [userData, reviewDetailData])

  if (!reviewDetailData && !userData) return null

  return (
    <ReviewWriteWrap
      onSubmit={(e) => {
        onSubmit(e)
      }}
    >
      {userData && reviewDetailData ? (
        <>
          <ReviewPostInfo
            reviewType={reviewType}
            title={reviewDetailData.title}
            nickname={reviewerName}
          />
          <ReviewRatingWrap>
            <p>
              {reviewType === 'GOODS' ? (
                <>{reviewerName}님과 거래가 어떠셨나요?</>
              ) : (
                <>{reviewerName}님과 직관은 어떠셨나요?</>
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
        </>
      ) : (
        <div>로딩중...</div>
      )}
    </ReviewWriteWrap>
  )
}

export default ReviewWritePage

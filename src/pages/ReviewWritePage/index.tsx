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
import { useLocation, useNavigate } from 'react-router-dom'
import useGetUserInfo from '@hooks/useGetUserInfo'
import {
  useGetReviewDetail,
  useMutateGoodsReview,
  useMutateMateReview,
} from '@hooks/useReviewHooks'
import SubHeader from '@layouts/SubHeader'
import { toast } from 'react-toastify'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

const ReviewWritePage = ({}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [reviewType, setReviewType] = useState(location.state.type)
  const [myId, setMyId] = useState(localStorage.getItem('memberId'))
  const [revieweeId, setRevieweeId] = useState(location.state.memberId)
  const [postId, setPostId] = useState(location.state.postId)
  const [reviewerName, setReviewerName] = useState<string | undefined>()
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

      try {
        postMateReview({
          matePostId: postId,
          jsonData: JSON.stringify(jsonData),
        })
        toast('직관 후기 작성이 완료되었어요.')
        navigate(`${ROUTE_PATH.PROFILE}/${localStorage.getItem('memberId')}`)
      } catch (err) {
        console.log(err)
      }
    } else {
      const jsonData = {
        rating: selectedRating,
        reviewContent: reviewContent,
      }

      try {
        postGoodsReview({
          reviewerId: Number(myId),
          goodsPostId: postId,
          jsonData: JSON.stringify(jsonData),
        })
        toast('굿즈 후기 작성이 완료되었어요.')
        navigate(`${ROUTE_PATH.PROFILE}/${localStorage.getItem('memberId')}`)
      } catch (err) {
        console.log(err)
      }
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
    <>
      <SubHeader
        left='back'
        center='후기 작성 페이지'
      />
      <ReviewWriteWrap
        onSubmit={(e) => {
          onSubmit(e)
        }}
      >
        {userData && reviewDetailData?.postImageUrl ? (
          <>
            <ReviewPostInfo
              reviewType={reviewType}
              title={reviewDetailData.title}
              nickname={reviewerName}
              postImageUrl={reviewDetailData.postImageUrl}
            />
            <ReviewRatingWrap>
              <p>
                <>{localStorage.getItem('nickname')}님,</>
                <br />
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
    </>
  )
}

export default ReviewWritePage

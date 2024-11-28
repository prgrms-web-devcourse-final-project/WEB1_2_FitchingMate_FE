import React, { useState } from 'react'
import {
  ReviewPostImage,
  ReviewPostInfoWrap,
  ReviewPostText,
  ReviewPostTitle,
  ReviewPostWrap,
  ReviewRatingWrap,
  ReviewSelectLabel,
  ReviewSelectRating,
  ReviewSendButtonWrap,
  ReviewTextareaWrap,
  ReviewWriteWrap,
} from './style'

import GlobalButton from '@components/GlobalButton'
import { GlobalFloatAside } from '@styles/globalStyle'
import ReviewSelectBox from './ReviewSelectBox'
import ReviewPostInfo from './ReviewPostInfo'
import ReviewTextarea from './ReviewTextarea'
import { text } from 'stream/consumers'

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
  const [selectedRating, setSelectedRating] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('rating', selectedRating)
    formData.append('review_content', textareaValue)
  }
  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(e.target.id)
  }
  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)
  }

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
        textareaValue={textareaValue}
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

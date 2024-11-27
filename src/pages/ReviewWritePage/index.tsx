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

import Worst from '@assets/character/character-worst.svg?react'
import Normal from '@assets/character/character-normal.svg?react'
import Best from '@assets/character/character-best.svg?react'
import GlobalButton from '@components/GlobalButton'
import { GlobalFloatAside } from '@styles/globalStyle'

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(e.target.id)
  }
  return (
    <ReviewWriteWrap>
      <ReviewPostWrap>
        <ReviewPostImage>
          <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4tKSd2NValZoc5cMRlfECFB2KA2qwqLAp5oN9UEHid-yEOv-IXdGsrpqGaxqdvTjtV42R5dLOiLXiGhkdq2qHTQ' />
        </ReviewPostImage>
        <ReviewPostInfoWrap>
          <ReviewPostTitle>{title}</ReviewPostTitle>
          <ReviewPostText>
            {reviewType === 'GOODS' ? (
              <>
                거래한 이웃 &nbsp;<span>{username}</span>
              </>
            ) : (
              <>
                함께한 메이트 &nbsp;<span>{username}</span>
              </>
            )}
          </ReviewPostText>
        </ReviewPostInfoWrap>
      </ReviewPostWrap>
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
        <ReviewSelectRating>
          <ul>
            <li>
              <ReviewSelectLabel
                htmlFor='worst'
                className={selectedRating === 'worst' ? 'active' : ''}
              >
                <div>
                  <Worst />
                </div>
                <p>별로에요</p>
              </ReviewSelectLabel>
              <input
                type='radio'
                id='worst'
                name='review_rating'
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </li>
            <li>
              <ReviewSelectLabel
                htmlFor='normal'
                className={selectedRating === 'normal' ? 'active' : ''}
              >
                <div>
                  <Normal />
                </div>
                <p>좋아요!</p>
              </ReviewSelectLabel>
              <input
                type='radio'
                id='normal'
                name='review_rating'
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </li>
            <li>
              <ReviewSelectLabel
                htmlFor='best'
                className={selectedRating === 'best' ? 'active' : ''}
              >
                <div>
                  <Best />
                </div>
                <p>최고에요!</p>
              </ReviewSelectLabel>
              <input
                type='radio'
                id='best'
                name='review_rating'
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </li>
          </ul>
        </ReviewSelectRating>
      </ReviewRatingWrap>
      <ReviewTextareaWrap>
        <p>
          {reviewType === 'GOODS' ? (
            <>따뜻한 거래 경험을 알려주세요!</>
          ) : (
            <>즐거운 직관 경험을 알려주세요!</>
          )}
        </p>
        <span>
          {reviewType === 'GOODS' ? (
            <>남겨주신 거래 후기는 상대방의 프로필에 공개돼요.</>
          ) : (
            <>남겨주신 메이트 후기는 상대방의 프로필에 공개돼요.</>
          )}
        </span>
        <textarea
          placeholder='후기를 남겨주세요.'
          value={textareaValue}
          onChange={(e) => {
            setTextareaValue(e.target.value)
          }}
        ></textarea>
      </ReviewTextareaWrap>
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

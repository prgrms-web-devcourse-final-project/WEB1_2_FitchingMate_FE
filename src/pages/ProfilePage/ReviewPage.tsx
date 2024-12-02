import PillButtonList from '@components/PillButtonList'
import { ReviewBox, ReviewButtonWrap, ReviewLinkBox, ReviewWrap } from './style'
import { Link } from 'react-router-dom'
import LinkIcon from '@assets/icon/link.svg?react'
import { useEffect, useState } from 'react'
import { goodsReviewList, mateReviewList } from './mockData'
import useFormattingDate from '@hooks/useFormattingDate'
import SubHeader from '@layouts/SubHeader'
import dayjs from 'dayjs'

interface ReviewTypes {
  postId: number
  title: string
  nickname: string
  rating: string
  content: string
  created_at: string
}

const GOODS_REVIEW = '1'
const MATE_REVIEW = '2'

const ReviewPage = () => {
  const [selectedButton, setSelectedButton] = useState(GOODS_REVIEW)
  const [reviewDataList, setReviewDataList] = useState<ReviewTypes[] | null>(
    null,
  )

  const formatDate = (created_at: string) => {
    const date = dayjs(created_at)
    return date.format('YYYY년 MM월 DD일')
  }

  const decideRatingText = (rating: string) => {
    switch (rating) {
      case 'BAD':
        return <>별로에요</>
      case 'GOOD':
        return <>좋았어요!</>
      case 'GREAT':
        return <>최고에요!</>
    }
  }

  useEffect(() => {
    if (selectedButton === '2') {
      setReviewDataList(mateReviewList)
    } else if (selectedButton === '1') {
      setReviewDataList(goodsReviewList)
    }
  }, [selectedButton])

  return (
    <>
      <SubHeader
        left='back'
        center='후기 모아보기'
      />
      <section>
        <ReviewButtonWrap>
          <PillButtonList
            buttons={[
              { id: '1', text: '굿즈거래 후기', disabled: false },
              { id: '2', text: '메이트 후기', disabled: false },
            ]}
            mode='radio'
            defaultSelected={selectedButton}
            onSelect={setSelectedButton}
          />
        </ReviewButtonWrap>
        <ReviewWrap>
          {reviewDataList &&
            reviewDataList.map((data, index) => {
              return (
                <ReviewBox key={index}>
                  <span>{decideRatingText(data.rating)}</span>
                  <p>{data.content}</p>
                  <em>
                    {data.nickname} · {formatDate(data.created_at)}
                  </em>
                  <ReviewLinkBox>
                    <Link to={'/'}>
                      <div>
                        <span>
                          {selectedButton === '2' && '직관후기'}
                          {selectedButton === '1' && '굿즈거래'}
                        </span>
                        <i>{data.title}</i>
                      </div>
                      <LinkIcon />
                    </Link>
                  </ReviewLinkBox>
                </ReviewBox>
              )
            })}
        </ReviewWrap>
      </section>
    </>
  )
}

export default ReviewPage

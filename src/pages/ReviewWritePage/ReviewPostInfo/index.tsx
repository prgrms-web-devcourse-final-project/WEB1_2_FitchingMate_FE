import {
  ReviewPostWrap,
  ReviewPostImage,
  ReviewPostInfoWrap,
  ReviewPostTitle,
  ReviewPostText,
} from '../style'

const ReviewPostInfo = ({
  reviewType,
  title,
  nickname,
}: {
  reviewType: string
  title: string
  nickname: string | undefined
}) => {
  return (
    <ReviewPostWrap>
      <ReviewPostImage>
        <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4tKSd2NValZoc5cMRlfECFB2KA2qwqLAp5oN9UEHid-yEOv-IXdGsrpqGaxqdvTjtV42R5dLOiLXiGhkdq2qHTQ' />
      </ReviewPostImage>
      <ReviewPostInfoWrap>
        <ReviewPostTitle>{title}</ReviewPostTitle>
        <ReviewPostText>
          {reviewType === 'GOODS' ? (
            <>
              거래한 이웃 &nbsp;<span>{nickname}</span>
            </>
          ) : (
            <>
              함께한 메이트 &nbsp;<span>{nickname}</span>
            </>
          )}
        </ReviewPostText>
      </ReviewPostInfoWrap>
    </ReviewPostWrap>
  )
}

export default ReviewPostInfo

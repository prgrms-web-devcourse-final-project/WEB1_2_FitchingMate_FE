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
  postImageUrl,
}: {
  reviewType: string
  title: string
  nickname: string | undefined
  postImageUrl: string
}) => {
  return (
    <ReviewPostWrap>
      <ReviewPostImage>
        <img src={postImageUrl} />
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

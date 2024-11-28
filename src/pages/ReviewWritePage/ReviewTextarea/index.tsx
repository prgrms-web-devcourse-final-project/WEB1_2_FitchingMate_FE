import { ReviewTextareaWrap } from '../style'

const ReviewTextarea = ({ reviewType, textareaValue, onTextareaChange }) => {
  return (
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
          onTextareaChange(e)
        }}
      />
    </ReviewTextareaWrap>
  )
}

export default ReviewTextarea

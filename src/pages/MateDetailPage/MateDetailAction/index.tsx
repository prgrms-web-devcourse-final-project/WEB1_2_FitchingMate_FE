import {
  MateDetailActionContainer,
  Notice,
  ActionSection,
  ChattingPeople,
  ActionButton,
} from './style'

const MateDetailAction = () => {
  const isConditionMatched = false // 조건 일치 여부
  const isRecruitmentComplete = false // 모집 완료 여부
  const isHost = false // 방장 여부
  const totalParticipants = 20 // 참여자 수

  return (
    <MateDetailActionContainer>
      {/* 경고 메시지 */}
      <Notice>
        {!isConditionMatched && (
          <span>⚠️ 이런! 모임에서 원하는 조건이 아니에요!</span>
        )}
      </Notice>

      {/* 액션 영역 */}
      <ActionSection>
        {/* 참여자 표시 */}
        <ChattingPeople>대화중인 메이트 - {totalParticipants}</ChattingPeople>

        {/* 버튼 */}
        <ActionButton>
          {isHost ? (
            <>
              <button>삭제하기</button>
              <button>수정하기</button>
            </>
          ) : isConditionMatched ? (
            !isRecruitmentComplete ? (
              <button>대화 나누기</button>
            ) : (
              <button disabled>모집 완료</button>
            )
          ) : (
            <button disabled>대화 나누기</button>
          )}
        </ActionButton>
      </ActionSection>
    </MateDetailActionContainer>
  )
}

export default MateDetailAction

import { useNavigate, useParams } from 'react-router-dom'
import {
  MateDetailActionContainer,
  Notice,
  ActionSection,
  ChattingPeople,
  ActionButton,
} from './style'

import { transformMatePostToFormData } from '@utils/formatPostData'
import { MatePostData } from '@typings/db'
import { useMateFormStore } from '@store/useMateFormStore'
import { useCreateMateChatRoom } from '@hooks/useCreateChatRoom'

interface MateDetailActionProps {
  matePost: MatePostData
  handleAlertClick: () => void
}

const MateDetailAction = ({
  matePost: matePostData,
  handleAlertClick,
}: MateDetailActionProps) => {
  const navigate = useNavigate()

  // 메이트 게시글 수정 폼 데이터 저장
  const { setMateFormData, setSelectedWeek, setImg } = useMateFormStore()

  // 메이트 게시글 id
  const { postId } = matePostData

  const { createChatRoom, createIsPending, createIsError, createError } =
    useCreateMateChatRoom(postId.toString())

  /**
   * 메이트 수정 페이지 이동
   *
   * 1. 메이트 게시글 수정 폼 데이터 저장
   * 2. 수정상태 넘기기
   * 3. 수정 페이지 이동
   */

  const handleEditClick = () => {
    const postFormData = transformMatePostToFormData(matePostData)
    const { matePost, selectedWeek, img } = postFormData

    setMateFormData(matePost)
    setSelectedWeek(selectedWeek as number)
    setImg(img)

    // 수정상태 넘기기
    navigate(`/mate-detail/${postId}/edit`, {
      state: { isEdit: true, postId },
    })
  }

  const isConditionMatched = true // 조건 일치 여부
  const isRecruitmentComplete = false // 모집 완료 여부
  const isHost = false // 방장 여부
  const totalParticipants = 20 // 참여자 수
  const isStatusCompleted = false // 직관 완료 여부

  return (
    <MateDetailActionContainer>
      {/* 경고 메시지 */}
      <Notice>
        {isStatusCompleted ? (
          <span>직관이 완료되었습니다.</span>
        ) : (
          !isConditionMatched && (
            <span>⚠️ 이런! 모임에서 원하는 조건이 아니에요!</span>
          )
        )}
      </Notice>

      {/* 액션 영역 */}
      <ActionSection>
        {!isStatusCompleted && (
          <>
            {/* 참여자 표시 */}
            <ChattingPeople>
              대화중인 메이트 - {totalParticipants}
            </ChattingPeople>

            {/* 버튼 */}
            <ActionButton>
              {isHost ? (
                <>
                  <button onClick={handleAlertClick}>삭제하기</button>
                  <button onClick={handleEditClick}>수정하기</button>
                </>
              ) : isConditionMatched ? (
                !isRecruitmentComplete ? (
                  <button
                    type='button'
                    onClick={createChatRoom}
                  >
                    대화 나누기
                  </button>
                ) : (
                  <button disabled>모집 완료</button>
                )
              ) : (
                <button disabled>대화 나누기</button>
              )}
            </ActionButton>
          </>
        )}
      </ActionSection>
    </MateDetailActionContainer>
  )
}

export default MateDetailAction

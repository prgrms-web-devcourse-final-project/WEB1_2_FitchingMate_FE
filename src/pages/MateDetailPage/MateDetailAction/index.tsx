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

interface MateDetailActionProps {
  matePost: MatePostData
  handleAlertClick: () => void
}

const MateDetailAction = ({
  matePost: MatePostData,
  handleAlertClick,
}: MateDetailActionProps) => {
  const navigate = useNavigate()
  const { id: postId } = useParams()

  const { setMateFormData, setSelectedWeek, setImg } = useMateFormStore()

  const handleEditClick = () => {
    const postFormData = transformMatePostToFormData(MatePostData)

    const { matePost, selectedWeek, img } = postFormData

    setMateFormData(matePost)
    setSelectedWeek(selectedWeek)
    setImg(img)

    navigate(`/mate-detail/${postId}/edit`, { state: { isEdit: true } })
  }

  const isConditionMatched = false // 조건 일치 여부
  const isRecruitmentComplete = false // 모집 완료 여부
  const isHost = true // 방장 여부
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
                  <button>대화 나누기</button>
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

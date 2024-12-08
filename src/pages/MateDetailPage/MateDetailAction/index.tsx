import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const { setMateFormData, setSelectedWeek, setImg } = useMateFormStore()

  const [isChattingStarted, setIsChattingStarted] = useState(false)

  // 상태 값
  const isConditionMatched = true // 조건 일치 여부
  const isRecruitmentComplete = false // 모집 완료 여부
  const isHost = false // 방장 여부
  const totalParticipants = 20 // 참여자 수
  const isStatusCompleted = false // 직관 완료 여부

  const { createChatRoom, createIsPending, createIsError, createError } =
    useCreateMateChatRoom(matePostData.postId.toString())

  /**
   * 메이트 수정 페이지 이동
   *
   * 1. 메이트 게시글 수정 폼 데이터 저장
   * 2. 수정상태 넘기기
   * 3. 수정 페이지 이동
   */

  // 수정 버튼 클릭 핸들러
  const handleEditClick = () => {
    const { matePost, selectedWeek, img } =
      transformMatePostToFormData(matePostData)

    setMateFormData(matePost)
    setSelectedWeek(selectedWeek as number)
    setImg(img)

    navigate(`/mate-detail/${matePostData.postId}/edit`, {
      state: { isEdit: true, postId: matePostData.postId },
    })
  }

  // 조건별 UI 렌더링
  const renderNotice = () => {
    if (isStatusCompleted) return '직관이 완료되었습니다.'
    if (isRecruitmentComplete) {
      return isConditionMatched || isHost
        ? '모집이 완료되었습니다.'
        : '⚠️ 이런! 모임에서 원하는 조건이 아니에요!'
    }
    if (!isConditionMatched && !isHost) {
      return '⚠️ 이런! 모임에서 원하는 조건이 아니에요!'
    }
    return null
  }

  const renderActions = () => {
    if (isStatusCompleted || isRecruitmentComplete) {
      return null
    }

    if (isHost) {
      return (
        <>
          <ChattingPeople>대화중인 메이트 - {totalParticipants}</ChattingPeople>
          <ActionButton>
            <button onClick={handleAlertClick}>삭제하기</button>
            <button onClick={handleEditClick}>수정하기</button>
          </ActionButton>
        </>
      )
    }

    if (!isChattingStarted && isConditionMatched) {
      return (
        <>
          <ChattingPeople>대화중인 메이트 - {totalParticipants}</ChattingPeople>
          <ActionButton>
            <button onClick={createChatRoom}>대화 나누기</button>
          </ActionButton>
        </>
      )
    }

    return null
  }

  return (
    <MateDetailActionContainer>
      {renderNotice() && <ActionSection>{renderNotice()}</ActionSection>}
      {renderActions() && <ActionSection>{renderActions()}</ActionSection>}
    </MateDetailActionContainer>
  )
}

export default MateDetailAction

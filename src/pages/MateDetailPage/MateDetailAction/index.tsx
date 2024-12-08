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

  // 상태 값
  const isStatusCompleted = matePostData.status === '직관완료' ? true : false
  const isHost =
    matePostData.authorId.toString() === localStorage.getItem('memberId')
      ? true
      : false

  const isRecruitmentCompleted =
    matePostData.status === '모집완료' ? true : false

  const isConditionMatched = (() => {
    const userGender = localStorage.getItem('gender')
    const userAge = localStorage.getItem('age')

    // 나이를 숫자로 변환
    const ageAsNumber = Number(userAge)
    if (isNaN(ageAsNumber) || ageAsNumber < 10) {
      return false // 나이가 10살 미만이거나 숫자가 아니면 false
    }


    // 나이를 범위로 변환
    let userAgeGroup: string
    if (ageAsNumber < 10) {
      return false // 10대 미만은 false
    } else if (ageAsNumber < 20) {
      userAgeGroup = '10대'
    } else if (ageAsNumber < 30) {
      userAgeGroup = '20대'
    } else if (ageAsNumber < 40) {
      userAgeGroup = '30대'
    } else if (ageAsNumber < 50) {
      userAgeGroup = '40대'
    } else {
      userAgeGroup = '50대이상'
    }

    // 성별 조건 확인
    const isGenderMatched =
      matePostData.gender === '상관없음' || matePostData.gender === userGender

    // 나이 조건 확인
    const isAgeMatched =
      matePostData.age === '상관없음' ||
      matePostData.age === userAgeGroup ||
      (userAgeGroup === '50대이상' && matePostData.age === '50대이상')

    return isGenderMatched && isAgeMatched
  })()
  
  const totalParticipants = matePostData.currentChatMembers // 참여자 수

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
    if (isRecruitmentCompleted) {
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
    if (isStatusCompleted || isRecruitmentCompleted) {
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

    if (isConditionMatched) {
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

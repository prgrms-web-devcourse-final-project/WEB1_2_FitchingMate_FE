import {
  QuestionSection,
  SelectButton,
} from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { Textarea } from '@pages/MatePostingPage/Tabs/ThirdTab/style'

import DownIcon from '@assets/icon/down.svg?react'

import BottomModalOption from '@pages/MatePostingPage/Tabs/FirstTab/BottomModalOption'
import BottomModal from '@components/BottomModal'
import useTeamDialog from '@hooks/useTeamDialog'
import ImageSection from './ImageSection'

const FirstTab = () => {
  const {
    selectedTeam,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  return (
    <>
      {/* 상품 이미지 */}
      <ImageSection />

      {/* 응원팀 선택 */}
      <QuestionSection>
        <label htmlFor='team'>굿즈팀 선택</label>
        <SelectButton onClick={handleClickSelectButton}>
          <p>{selectedTeam || '팀 선택'}</p>
          <DownIcon />
        </SelectButton>
      </QuestionSection>

      {/* 상품 이름 */}
      <QuestionSection>
        <label htmlFor='title'>상품 이름</label>
        <input
          type='text'
          id='title'
        />
      </QuestionSection>

      {/* 상품 가격 */}
      <QuestionSection>
        <label htmlFor='price'>상품 가격</label>
        <input
          type='number'
          id='price'
          placeholder='₩ 판매할 가격을 입력하세요'
        />
      </QuestionSection>

      {/* 상품 설명 */}
      <QuestionSection>
        <label htmlFor='description'>자세한 설명</label>
        <Textarea
          id='description'
          placeholder='상품에 대한 설명을 입력하세요'
        />
      </QuestionSection>

      {/* 응원팀 선택 모달 */}
      <BottomModal ref={bottomModalRef}>
        <BottomModalOption onClose={handleTeamSelect} />
      </BottomModal>
    </>
  )
}

export default FirstTab

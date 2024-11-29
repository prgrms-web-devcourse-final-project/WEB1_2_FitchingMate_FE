import useTabs from '@hooks/useTabs'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'
import ThirdTab from './Tabs/ThirdTab'

import TabModel from '@utils/Model/tabModel'
import { SubmitContainer, SubmitForm, SubmitTitle } from './style'
import ProgressSection from '@components/ProgressSection'

/**
 * 메이트 구인글 작성 시 필요한 탭정보
 *
 * title : 각 페이지별 타이틀
 * currentContent : 각 페이지별 컨텐츠 컴포넌트
 * currentButton : 각 페이지별 버튼 정보
 *
 * ! 수정 필요하면 여기서 진행하면됨
 */

const matePostingComponents = [
  new TabModel(<FirstTab />, '어떤 경기를 직관하고 싶나요?'),
  new TabModel(<SecondTab />, '어떤 메이트와 직관하고 싶나요?'),
  new TabModel(<ThirdTab />, '어떤 직관 모임을 만들까요?'),
]

const MatePostingPage = () => {
  const { currentTab, ...restTabInfo } = useTabs({
    components: matePostingComponents,
    initialTab: 0,
  })

  return (
    <SubmitContainer>
      {/* 최상단 타이틀 영역 */}
      <SubmitTitle>{currentTab.title}</SubmitTitle>

      {/* 직관 모임 등록 폼 영역 */}

      <SubmitForm onSubmit={(e) => e.preventDefault()}>
        {currentTab.content}
        {/* 직관 모임 등록 프로세스 영역 */}
      </SubmitForm>

      <ProgressSection
        {...restTabInfo}
        isDisabled={false}
        handleSubmit={() => {}}
      />
    </SubmitContainer>
  )
}

export default MatePostingPage

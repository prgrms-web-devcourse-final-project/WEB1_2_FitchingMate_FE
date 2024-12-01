import useTabs from '@hooks/useTabs'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'
import ThirdTab from './Tabs/ThirdTab'

import TabModel from '@utils/Model/tabModel'
import { SubmitContainer, SubmitForm, SubmitTitle } from './style'
import ProgressSection from '@components/ProgressSection'

import useSubmitMatePost from '@hooks/useSubmitMatePost'

/**
 * 메이트 구인글 작성 시 필요한 탭정보
 *
 * title : 각 페이지별 타이틀
 * currentContent : 각 페이지별 컨텐츠 컴포넌트
 * currentButton : 각 페이지별 버튼 정보
 *
 * ! 수정 필요하면 여기서 진행하면됨
 */

const FIRST_TAB_VALID_KEYS = ['teamId', 'matchId'] as const
const SECOND_TAB_VALID_KEYS = [
  'age',
  'maxParticipants',
  'gender',
  'transportType',
] as const
const THIRD_TAB_VALID_KEYS = ['title', 'content'] as const

const matePostingComponents = [
  new TabModel(<FirstTab />, '어떤 경기를 직관하고 싶나요?'),
  new TabModel(<SecondTab />, '어떤 메이트와 직관하고 싶나요?'),
  new TabModel(<ThirdTab />, '어떤 직관 모임을 만들까요?'),
]

const MatePostingPage = () => {
  // 추후 에러 처리 필요
  const { handleSubmit, matePost, isPending, isError, error } =
    useSubmitMatePost()

  const { currentTab, selectedTab, ...restTabInfo } = useTabs({
    components: matePostingComponents,
    initialTab: 0,
  })

  const validateTab = (
    keys:
      | typeof FIRST_TAB_VALID_KEYS
      | typeof SECOND_TAB_VALID_KEYS
      | typeof THIRD_TAB_VALID_KEYS,
  ) => keys.some((key) => !matePost[key])

  const currentTabDisabled = [
    validateTab(FIRST_TAB_VALID_KEYS),
    validateTab(SECOND_TAB_VALID_KEYS),
    validateTab(THIRD_TAB_VALID_KEYS) || isPending,
  ]

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
        selectedTab={selectedTab}
        isDisabled={currentTabDisabled[selectedTab]}
        handleSubmit={handleSubmit}
        {...restTabInfo}
      />
    </SubmitContainer>
  )
}

export default MatePostingPage

import useTabs from '@hooks/useTabs'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'
import ThirdTab from './Tabs/ThirdTab'

import TabModel from '@utils/Model/tabModel'
import { SubmitContainer, SubmitForm, SubmitTitle } from './style'
import ProgressSection from '@components/ProgressSection'

import useSubmitMatePost from '@hooks/useSubmitMatePost'
import SubHeader from '@layouts/SubHeader'
import useGetMatePost from '@hooks/usegetMatePost'
import useUpdateMateFormData from '@hooks/useUpdateMateFormData'
import { useMateFormStore } from '@store/useMateFormStore'

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

type CategoryList =
  | typeof FIRST_TAB_VALID_KEYS
  | typeof SECOND_TAB_VALID_KEYS
  | typeof THIRD_TAB_VALID_KEYS

const MatePostingPage = () => {
  const { matePost, setInitialState } = useMateFormStore()

  /**
   * 메이트 게시글 생성 및 수정
   *
   * 추후 로딩 상태 추가 필요
   * 에러 상태 추가 필요
   *
   * 아마 추후에는 isEdit 상태로 확인할듯
   *
   * @param matePostId 게시글 아이디
   * @param memberId 멤버 아이디
   */

  const { handleSubmit, isPending, isError, error } = useSubmitMatePost({
    matePostId: 1,
    memberId: Number(localStorage.getItem('memberId')) || undefined,
  })

  /**
   * 메이트 게시글 수정 폼 데이터 업데이트
   *
   * 추후 로딩 상태 추가 필요
   * 에러 상태 추가 필요
   *
   * 추후에는 이거 없애고 post에서 edit으로 들어올 때 해당 게시글 상태 데이터 store 업데이트 해서 들어오면될듯
   */

  // useUpdateMateFormData(1)

  const { currentTab, selectedTab, ...restTabInfo } = useTabs({
    components: matePostingComponents,
    initialTab: 0,
  })

  const validateTab = (categoryList: CategoryList) =>
    categoryList.some((category) => !matePost[category])

  const currentTabDisabled = [
    validateTab(FIRST_TAB_VALID_KEYS),
    validateTab(SECOND_TAB_VALID_KEYS),
    validateTab(THIRD_TAB_VALID_KEYS),
  ]

  const handleBackClick = () => setInitialState()

  return (
    <>
      <SubHeader
        left='back'
        center='메이트 구인하기'
        onClick={handleBackClick}
      />
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
    </>
  )
}

export default MatePostingPage

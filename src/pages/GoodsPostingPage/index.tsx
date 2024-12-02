import { SubmitContainer, SubmitForm } from '@pages/MatePostingPage/style'

import useTabs from '@hooks/useTabs'

import ProgressSection from '@components/ProgressSection'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'

import TabModel from '@utils/Model/tabModel'
import { useGoodsFormStore } from '@store/useGoodsFormStore'
import SubHeader from '@layouts/SubHeader'
import useSubmitGoodsPost from '@hooks/useSubmitGoodsPost'

import useUpdateFormdata from '@hooks/useUpdateFormdata'
import { useLocation, useParams } from 'react-router-dom'

const goodsPostingComponents = [
  new TabModel(<FirstTab />),
  new TabModel(<SecondTab />),
]

const FIRST_TAB_VALID_KEYS = [
  'teamId',
  'category',
  'content',
  'price',
  'title',
] as const

const SECOND_TAB_VALID_KEYS = ['location'] as const

type CategoryList = typeof FIRST_TAB_VALID_KEYS | typeof SECOND_TAB_VALID_KEYS

const GoodsPostingPage = () => {
  const {
    goods,
    goods: { location },
    imageList,
    setInitialState,
  } = useGoodsFormStore()

  const { id } = useParams()

  const goodsPostId = id ? parseInt(id, 10) : undefined

  /**
   * 굿즈 등록 폼 제출 및 수정 폼 데이터 업데이트
   *
   * 추후 로딩 상태 추가 필요
   * 에러 상태 추가 필요
   *
   * 아마 추후에는 isEdit 상태로 확인할듯
   *
   * @param memberId 멤버 아이디
   * @param goodsPostId 게시글 아이디
   */

  const { handleSubmit, isPending, isError, error } = useSubmitGoodsPost({
    memberId: 1,
    goodsPostId,
  })

  /**
   * 굿즈 수정 폼 데이터 업데이트
   *
   * 추후 로딩 상태 추가 필요
   * 에러 상태 추가 필요
   *
   * 추후에는 이거 없애고 post에서 edit으로 들어올 때 해당 게시글 상태 데이터 store 업데이트 해서 들어오면될듯
   */

  // useUpdateFormdata(1)

  // 탭 정보 관리
  const { currentTab, selectedTab, ...restTabInfo } = useTabs({
    components: goodsPostingComponents,
    initialTab: 0,
  })

  const validateTab = (categoryList: CategoryList) =>
    categoryList.some((category) => !goods[category])

  const currentTabDisabled = [
    validateTab(FIRST_TAB_VALID_KEYS) || imageList.length === 0,
    !location.latitude || !location.longitude,
  ]

  const handleBackClick = () => setInitialState()

  return (
    <>
      <SubHeader
        left='back'
        center='굿즈 거래하기'
        onClick={handleBackClick}
      />
      <SubmitContainer>
        {/* 직관 모임 등록 폼 영역 */}
        <SubmitForm onSubmit={(e) => e.preventDefault()}>
          {currentTab.content}
        </SubmitForm>

        {/* 직관 모임 등록 프로세스 영역 */}
        <ProgressSection
          {...restTabInfo}
          selectedTab={selectedTab}
          isDisabled={currentTabDisabled[selectedTab]}
          handleSubmit={handleSubmit}
        />
      </SubmitContainer>
    </>
  )
}

export default GoodsPostingPage

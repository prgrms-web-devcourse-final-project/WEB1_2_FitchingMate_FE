import { SubmitContainer, SubmitForm } from '@pages/MatePostingPage/style'

import useTabs from '@hooks/useTabs'

import ProgressSection from '@components/ProgressSection'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'

import TabModel from '@utils/Model/tabModel'
import { useGoodsFormStore } from '@store/useGoodsFormStore'
import SubHeader from '@layouts/SubHeader'
import useSubmitGoodsPost from '@hooks/useSubmitGoodsPost'

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
  } = useGoodsFormStore()
  const { handleSubmit, isPending, isError, error } = useSubmitGoodsPost()

  const { currentTab, selectedTab, ...restTabInfo } = useTabs({
    components: goodsPostingComponents,
    initialTab: 0,
  })

  const validateTab = (categoryList: CategoryList) =>
    categoryList.some((category) => !goods[category])

  const currentTabDisabled = [
    validateTab(FIRST_TAB_VALID_KEYS),
    !location.latitude || !location.longitude,
  ]

  return (
    <>
      <SubHeader
        left='back'
        center='굿즈 거래하기'
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

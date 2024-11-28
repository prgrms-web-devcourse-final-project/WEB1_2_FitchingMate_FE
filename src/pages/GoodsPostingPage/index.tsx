import { SubmitContainer, SubmitForm } from '@components/SubmitPage/style'

import useTabs from '@hooks/useTabs'

import ProgressSection from '@components/ProgressSection'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'

import TabModel from '@utils/tabModel'
import { useGoodsFormStore } from '@store/useGoodsFormStore'

const goodsPostingComponents = [
  new TabModel(<FirstTab />),
  new TabModel(<SecondTab />),
]

const GoodsPostingPage = () => {
  const { currentTab, ...restTabInfo } = useTabs({
    components: goodsPostingComponents,
    initialTab: 0,
  })

  if (!currentTab) return null

  const { goods } = useGoodsFormStore()

  const { title, content, price, category, location } = goods

  const isDisabled = !title || !content || !price || !category

  const handleSubmit = () => {
    console.log('submit')
    console.log(goods)
  }

  return (
    <SubmitContainer>
      {/* 직관 모임 등록 폼 영역 */}
      <SubmitForm onSubmit={(e) => e.preventDefault()}>
        {currentTab.content}
      </SubmitForm>

      {/* 직관 모임 등록 프로세스 영역 */}
      <ProgressSection
        {...restTabInfo}
        isDisabled={isDisabled || location === null}
        handleSubmit={handleSubmit}
      />
    </SubmitContainer>
  )
}

export default GoodsPostingPage

import {
  SubmitContainer,
  SubmitForm,
  SubmitTitle,
} from '@components/SubmitPage/style'

import useTabs from '@hooks/useTabs'

import ProgressSection from '@components/ProgressSection'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'

import TabModel from '@utils/tabModel'

const goodsPostingComponents = [
  new TabModel(<FirstTab />),
  new TabModel(<SecondTab />),
]

const GoodsPostingPage = () => {
  const {
    currentTab,
    selectedTab,
    handleNext,
    handlePrevious,
    isFirstTab,
    isFinalTab,
  } = useTabs({
    components: goodsPostingComponents,
    initialTab: 0,
  })

  if (!currentTab) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const formDataObject = Object.fromEntries(formData.entries())
    console.log(formDataObject)
  }

  const { title, content } = currentTab

  return (
    <SubmitContainer>
      {/* 최상단 타이틀 영역 */}
      {title && <SubmitTitle>{title}</SubmitTitle>}

      {/* 직관 모임 등록 폼 영역 */}

      <SubmitForm onSubmit={handleSubmit}>{content}</SubmitForm>

      {/* 직관 모임 등록 프로세스 영역 */}
      <ProgressSection
        components={goodsPostingComponents}
        selectedTab={selectedTab}
        isFirstTab={isFirstTab}
        isFinalTab={isFinalTab}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </SubmitContainer>
  )
}

export default GoodsPostingPage

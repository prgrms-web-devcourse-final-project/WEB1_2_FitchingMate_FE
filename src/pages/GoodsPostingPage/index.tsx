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
  new TabModel(<FirstTab />, {
    previous: false,
    next: true,
  }),
  new TabModel(<SecondTab />, {
    previous: true,
    next: true,
    isSubmit: true,
  }),
]

const GoodsPostingPage = () => {
  const { currentTab, selectedTab, handleNext, handlePrevious } = useTabs({
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

  const { title, content, currentButton } = currentTab

  const buttonText = () => {
    if (currentButton.isSubmit) return '상품 등록하기'
    if (currentButton.previous) return '이전'
    return '다음'
  }

  return (
    <SubmitContainer>
      {/* 최상단 타이틀 영역 */}
      {title && <SubmitTitle>{title}</SubmitTitle>}

      {/* 직관 모임 등록 폼 영역 */}

      <SubmitForm onSubmit={handleSubmit}>
        {content}
        {/* 직관 모임 등록 프로세스 영역 */}
        <ProgressSection
          components={goodsPostingComponents}
          selectedTab={selectedTab}
          currentButton={currentButton}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          getNextButtonText={buttonText}
        />
      </SubmitForm>
    </SubmitContainer>
  )
}

export default GoodsPostingPage

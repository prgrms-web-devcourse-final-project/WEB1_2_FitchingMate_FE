import { SubmitContainer, SubmitTitle, SubmitForm } from './style'

import useTabs from '@hooks/useTabs'
import { useLocation } from 'react-router-dom'

import TabModel from '@utils/Model/tabModel'

interface SubmitPageProps {
  components: TabModel[]
  initialTab: number
}

const BUTTON_TEXT = {
  MATE: '직관모임 등록하기',
  GOODS: '상품 등록하기',
  NEXT: '다음',
} as const

const SubmitPage = ({ components, initialTab }: SubmitPageProps) => {
  const { currentTab, changeTab, selectedTab } = useTabs({
    components,
    initialTab,
  })

  if (!currentTab) return null

  // 현재 페이지가 직관모임 등록 페이지인지 상품 등록 페이지인지 확인
  const { pathname } = useLocation()

  const isMatePostingPage = pathname.includes('/mate-posting')
  const isGoodsPostingPage = pathname.includes('/goods-posting')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  // 직관모임 등록 페이지일 경우 직관모임 등록하기 버튼 텍스트 변경
  const getNextButtonText = () => {
    if (!currentButton.isSubmit) return BUTTON_TEXT.NEXT
    if (isMatePostingPage) return BUTTON_TEXT.MATE
    if (isGoodsPostingPage) return BUTTON_TEXT.GOODS

    return BUTTON_TEXT.NEXT
  }

  const { title, content, currentButton } = currentTab

  return (
    <SubmitContainer>
      {/* 최상단 타이틀 영역 */}
      {title && <SubmitTitle>{title}</SubmitTitle>}

      {/* 직관 모임 등록 폼 영역 */}

      <SubmitForm onSubmit={handleSubmit}>
        {content}
        {/* 직관 모임 등록 프로세스 영역 */}
      </SubmitForm>
    </SubmitContainer>
  )
}

export default SubmitPage

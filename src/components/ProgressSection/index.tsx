import { useLocation } from 'react-router-dom'
import {
  Button,
  ButtonContainer,
  PreviousButton,
  ProcessBar,
  ProcessSection,
} from './style'

interface ProgressSectionProps {
  totalTab: number
  selectedTab: number
  isFirstTab: boolean
  isFinalTab: boolean
  handlePrevious: () => void
  handleNext: () => void
  handleSubmit: () => void
  isDisabled: boolean
}

const ProgressSection = ({
  totalTab,
  selectedTab,
  handlePrevious,
  handleNext,
  isFirstTab,
  isFinalTab,
  isDisabled,
  handleSubmit,
}: ProgressSectionProps) => {
  const handleClick = isFinalTab ? handleSubmit : handleNext

  const { pathname } = useLocation()

  const lastTabButtonText = pathname.includes('edit') ? '수정하기' : '등록하기'
  return (
    <div>
      {/* 직관 모임 등록 프로세스 영역 */}
      <ProcessSection>
        {Array.from({ length: totalTab }).map((_, index) => (
          <ProcessBar
            key={index}
            $totalLength={totalTab}
            $isActive={index <= selectedTab}
          />
        ))}
      </ProcessSection>

      {/* 직관 모임 등록 버튼 영역 */}
      <ButtonContainer>
        {!isFirstTab && (
          <PreviousButton onClick={handlePrevious}>이전</PreviousButton>
        )}
        <Button
          onClick={handleClick}
          $isPrevious={!isFirstTab}
          disabled={isDisabled}
          $isDisabled={isDisabled}
        >
          {isFinalTab ? lastTabButtonText : '다음'}
        </Button>
      </ButtonContainer>
    </div>
  )
}

export default ProgressSection

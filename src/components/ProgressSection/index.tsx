import TabModel from '@utils/tabModel'
import {
  Button,
  ButtonContainer,
  PreviousButton,
  ProcessBar,
  ProcessSection,
} from './style'

interface ProgressSectionProps {
  components: TabModel[]
  selectedTab: number

  currentButton: {
    previous: boolean
    next: boolean
    isSubmit?: boolean
  }

  handlePrevious: () => void
  handleNext: () => void
  getNextButtonText: () => string
}

const ProgressSection = ({
  components,
  selectedTab,
  currentButton,
  handlePrevious,
  handleNext,
  getNextButtonText,
}: ProgressSectionProps) => {
  return (
    <div>
      {/* 직관 모임 등록 프로세스 영역 */}
      <ProcessSection>
        {components.map((_, index) => (
          <ProcessBar
            key={index}
            $totalLength={components.length}
            $isActive={index <= selectedTab}
          />
        ))}
      </ProcessSection>

      {/* 직관 모임 등록 버튼 영역 */}
      <ButtonContainer>
        {currentButton.previous && (
          <PreviousButton onClick={handlePrevious}>이전</PreviousButton>
        )}
        <Button
          onClick={handleNext}
          $isPrevious={currentButton.previous}
        >
          {getNextButtonText()}
        </Button>
      </ButtonContainer>
    </div>
  )
}

export default ProgressSection

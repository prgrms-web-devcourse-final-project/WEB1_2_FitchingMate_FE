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
  isFirstTab: boolean
  isFinalTab: boolean
  handlePrevious: () => void
  handleNext: () => void
}

const ProgressSection = ({
  components,
  selectedTab,
  handlePrevious,
  handleNext,
  isFirstTab,
  isFinalTab,
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
        {!isFirstTab && (
          <PreviousButton onClick={handlePrevious}>이전</PreviousButton>
        )}
        <Button
          onClick={handleNext}
          $isPrevious={!isFirstTab}
        >
          {isFinalTab ? '상품 등록하기' : '다음'}
        </Button>
      </ButtonContainer>
    </div>
  )
}

export default ProgressSection

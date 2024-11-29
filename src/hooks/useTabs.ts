import { useState } from 'react'
import TabModel from '@utils/Model/tabModel'

interface UseTabProps {
  initialTab: number
  components: TabModel[]
}

const useTabs = ({ initialTab, components }: UseTabProps) => {
  if (!Array.isArray(components) || components.length === 0) {
    throw new Error('components는 배열이어야 합니다.')
  }

  const [selectedTab, setSelectedTab] = useState(initialTab)

  const handleNext = () => {
    if (selectedTab === components.length - 1) return
    setSelectedTab(selectedTab + 1)
  }

  const handlePrevious = () => {
    if (selectedTab === 0) return
    setSelectedTab(selectedTab - 1)
  }

  return {
    currentTab: components[selectedTab],
    changeTab: setSelectedTab,
    selectedTab,
    totalTab: components.length,
    isFirstTab: selectedTab === 0,
    isFinalTab: selectedTab === components.length - 1,
    handleNext,
    handlePrevious,
  }
}

export default useTabs

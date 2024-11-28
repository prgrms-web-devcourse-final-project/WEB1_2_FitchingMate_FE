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

  return {
    currentTab: components[selectedTab],
    changeTab: setSelectedTab,
    selectedTab,
  }
}

export default useTabs

import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'
import ThirdTab from './Tabs/ThirdTab'

import SubmitPage from '@components/SubmitPage'
import TabModel from '@utils/Model/tabModel'

/**
 * 메이트 구인글 작성 시 필요한 탭정보
 *
 * title : 각 페이지별 타이틀
 * currentContent : 각 페이지별 컨텐츠 컴포넌트
 * currentButton : 각 페이지별 버튼 정보
 *
 * ! 수정 필요하면 여기서 진행하면됨
 */

const matePostingComponents = [
  new TabModel(
    <FirstTab />,
    {
      previous: false,
      next: true,
    },
    '어떤 경기를 직관하고 싶나요?',
  ),
  new TabModel(
    <SecondTab />,
    {
      previous: true,
      next: true,
    },
    '어떤 메이트와 직관하고 싶나요?',
  ),
  new TabModel(
    <ThirdTab />,
    {
      previous: true,
      next: false,
      isSubmit: true,
    },
    '어떤 직관 모임을 만들까요?',
  ),
]

const matePostingInitialOptions = {
  initialTab: 0,
  components: matePostingComponents,
}

const MatePostingPage = () => {
  return <SubmitPage {...matePostingInitialOptions} />
}

export default MatePostingPage

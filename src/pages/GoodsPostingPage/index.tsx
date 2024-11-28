import TabModel from '@utils/Model/tabModel'
import SubmitPage from '@components/SubmitPage'

import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'

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

const goodsPostingInitialOptions = {
  initialTab: 0,
  components: goodsPostingComponents,
}

const GoodsPostingPage = () => {
  return <SubmitPage {...goodsPostingInitialOptions} />
}

export default GoodsPostingPage

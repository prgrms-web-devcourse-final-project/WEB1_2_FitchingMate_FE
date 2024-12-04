import { SubmitContainer, SubmitForm } from '@pages/MatePostingPage/style'

import useTabs from '@hooks/useTabs'

import ProgressSection from '@components/ProgressSection'
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'

import TabModel from '@utils/Model/tabModel'
import { useGoodsFormStore } from '@store/useGoodsFormStore'
import SubHeader from '@layouts/SubHeader'

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { transformGoodsDetailToSubmitData } from '@utils/formatPostData'
import usePostGoodsPost from '@hooks/usePostGoodsPost'
import useEditGoodsPost from '@hooks/useEditGoodsPost'

const goodsPostingComponents = [
  new TabModel(<FirstTab />),
  new TabModel(<SecondTab />),
]

const FIRST_TAB_VALID_KEYS = [
  'teamId',
  'category',
  'content',
  'price',
  'title',
] as const

const SECOND_TAB_VALID_KEYS = ['location'] as const

type CategoryList = typeof FIRST_TAB_VALID_KEYS | typeof SECOND_TAB_VALID_KEYS

const GoodsPostingPage = () => {
  const {
    goods,
    goods: { location },
    imageList,
    setInitialState,
  } = useGoodsFormStore()

  /**
   * 굿즈 등록 폼 제출 및 수정 폼 데이터 업데이트
   *
   * 추후 로딩 상태 추가 필요
   * 에러 상태 추가 필요
   * 추후 멤버 아이디 빠질 예정
   *
   * @param memberId 멤버 아이디
   */

  // 굿즈 포스팅 수정 시 넘어오는 isEdit 상태, postId 정보 확인
  const { state } = useLocation()
  const goodsPostId = state?.isEdit ? state.goodsPostId : undefined

  // 굿즈 등록 요청
  const { mutateGoodsPost, isPostPending, isPostError, postError } =
    usePostGoodsPost(1)

  // 굿즈 수정 요청
  const { mutateEditGoodsPost, isEditPending, isEditError, editError } =
    useEditGoodsPost({ memberId: 1, goodsPostId })

  // 탭 정보 관리
  const { currentTab, selectedTab, ...restTabInfo } = useTabs({
    components: goodsPostingComponents,
    initialTab: 0,
  })

  // 굿즈 등록 폼 초기화
  useEffect(() => {
    return () => {
      if (!state?.isEdit) {
        setInitialState()
      }
    }
  }, [])

  const validateTab = (categoryList: CategoryList) =>
    categoryList.some((category) => !goods[category])

  const currentTabDisabled = [
    validateTab(FIRST_TAB_VALID_KEYS) || imageList.length === 0,
    !location.latitude || !location.longitude,
  ]

  const handleSubmit = () => {
    const formData = transformGoodsDetailToSubmitData(goods, imageList)

    if (state?.isEdit) {
      mutateEditGoodsPost(formData)
      return
    }

    mutateGoodsPost(formData)
  }

  return (
    <>
      <SubHeader
        left='back'
        center='굿즈 거래하기'
      />
      <SubmitContainer>
        {/* 직관 모임 등록 폼 영역 */}
        <SubmitForm onSubmit={(e) => e.preventDefault()}>
          {currentTab.content}
        </SubmitForm>

        {/* 직관 모임 등록 프로세스 영역 */}
        <ProgressSection
          {...restTabInfo}
          selectedTab={selectedTab}
          isDisabled={currentTabDisabled[selectedTab]}
          handleSubmit={handleSubmit}
        />
      </SubmitContainer>
    </>
  )
}

export default GoodsPostingPage

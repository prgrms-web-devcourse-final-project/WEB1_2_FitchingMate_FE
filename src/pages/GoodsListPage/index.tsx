import TeamSelectSection from '@components/TeamSelectSection'
import { FilterWrap, GoodsCardWrap, TeamSelectWrap } from './style'
import GoodsCard from '@components/GoodsCard'
import goodsService from '@apis/goodsService'
import { useEffect, useState } from 'react'
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'
import { QUERY_KEY } from '@apis/queryClient'
import PillButton from '@components/PillButton'
import { useInView } from 'react-intersection-observer'
import { useTopRef } from '@hooks/useTopRef'
import { toast, ToastContainer } from 'react-toastify'
import { useLocation } from 'react-router-dom'

const CATEGORY_LIST = ['전체', '유니폼', '모자', '의류', '잡화', '기념상품']

const GoodsListPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const location = useLocation()

  useEffect(() => {
    const isPostSuccess = location.state?.isPostSuccess
    if (isPostSuccess) {
      toast.success('굿즈 게시글 등록이 완료되었습니다.')
    }
  }, [location.state])

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.GOODS_LIST, selectedTeam, selectedCategory],

      queryFn: ({ pageParam }) =>
        goodsService.getGoodsList(selectedTeam, selectedCategory, pageParam),

      initialPageParam: 0,

      getNextPageParam: (lastPage) =>
        lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,

      placeholderData: keepPreviousData,
    })

  const { ref, inView } = useInView()

  const { topRef, handleUpButtonClick } = useTopRef()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  const { pages } = data

  const goodsList = pages.flatMap((page) => page.content)

  return (
    <section ref={topRef}>
      <TeamSelectWrap>
        <TeamSelectSection
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />
      </TeamSelectWrap>
      <FilterWrap>
        {CATEGORY_LIST.map((category) => (
          <PillButton
            key={category}
            text={category}
            $isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </FilterWrap>
      <GoodsCardWrap>
        {goodsList.map((goods) => (
          <GoodsCard
            key={goods.id}
            card={goods}
          />
        ))}
        <div ref={ref}>{isFetchingNextPage && '로딩 중...'}</div>
      </GoodsCardWrap>

      <FloatButton
        path={ROUTE_PATH.GOODS_POSTING}
        handleUpButtonClick={handleUpButtonClick}
      />
      <ToastContainer />
    </section>
  )
}

export default GoodsListPage

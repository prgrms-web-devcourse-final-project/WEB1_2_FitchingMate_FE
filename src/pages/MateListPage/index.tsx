import { useState, useEffect } from 'react'
import TeamSelectSection from '@components/TeamSelectSection'
import {
  FilterModalButton,
  FilterSelectOptionWrap,
  FilterWrap,
  TeamSelectWrap,
} from './style'

import PillButton from '@components/PillButton'
import BottomModal from '@components/BottomModal'
import MateFilterOptions from './MateFilterOptions'

import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'
import { useModal } from '@hooks/useModal'
import { kboTeamList } from '@constants/kboInfo'

import { getMateList } from '@apis/mateListService'
import MateCard from '@components/MateCard'
import { useTopRef } from '@hooks/useTopRef'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import { useInView } from 'react-intersection-observer'
import MainMateCard from '@components/MainMateCard'

const MateListPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(
    kboTeamList[0].id,
  ) // 팀 선택 상태
  const { bottomModalRef, handleOpenBottomModal, handleCloseBottomModal } =
    useModal()

  // 필터 상태
  const [selectedFilters, setSelectedFilters] = useState({
    sortType: '최신 작성일 순',
    age: null,
    gender: null,
    maxParticipants: null,
    transportType: null,
  })
  const [tempFilters, setTempFilters] = useState(selectedFilters)

  // 필터 변경 핸들러 (임시 필터)
  const handleTempFilterChange = (filters: Partial<typeof tempFilters>) => {
    setTempFilters((prevFilters) => ({
      ...prevFilters,
      ...filters,
    }))
  }

  // "완료" 버튼 핸들러
  const applyFilters = () => {
    setSelectedFilters(tempFilters) // 임시 필터를 실제 필터로 반영
    handleCloseBottomModal()
  }

  // 팀 선택 핸들러
  const handleTeamSelect = (team: number | null) => {
    setSelectedTeam(team)
  }

  // 페이지 상단 버튼 핸들러
  const { topRef, handleUpButtonClick } = useTopRef()

  // 무한 스크롤 핸들러
  const { ref, inView } = useInView()

  // 메이트 목록 API 호출
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.MATE_LIST, { selectedTeam, ...selectedFilters }],

      queryFn: ({ pageParam }) =>
        getMateList({ teamId: selectedTeam, ...selectedFilters }, pageParam),

      initialPageParam: 0,

      getNextPageParam: (lastPage: any) =>
        lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
    })

  // 무한 스크롤 핸들러
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  // 메이트 목록 추출
  const { pages } = data
  const mateList = pages.flatMap((page) => page.content)

  return (
    <section ref={topRef}>
      <TeamSelectWrap>
        <TeamSelectSection
          selectedTeam={selectedTeam as number}
          onSelectTeam={handleTeamSelect}
        />
      </TeamSelectWrap>
      <FilterWrap>
        <FilterModalButton>
          <PillButton
            $isSelected={true}
            text='필터'
            onClick={handleOpenBottomModal}
          />
        </FilterModalButton>
        <FilterSelectOptionWrap>
          {selectedFilters.age && <p>{selectedFilters.age}</p>}
          {selectedFilters.gender && <p>{selectedFilters.gender}</p>}
          {selectedFilters.maxParticipants && (
            <p>{selectedFilters.maxParticipants}</p>
          )}
          {selectedFilters.transportType && (
            <p>{selectedFilters.transportType}</p>
          )}
        </FilterSelectOptionWrap>
      </FilterWrap>
      <div>
        {mateList.map((mate) => (
          <MainMateCard
            key={mate.postId}
            card={mate}
          />
        ))}
        <div ref={ref} />
      </div>

      <FloatButton
        path={ROUTE_PATH.MATE_POSTING}
        handleUpButtonClick={handleUpButtonClick}
      />

      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions
          onClose={applyFilters}
          selectedFilters={tempFilters} // 임시 필터 전달
          onFilterChange={handleTempFilterChange}
        />
      </BottomModal>
    </section>
  )
}

export default MateListPage

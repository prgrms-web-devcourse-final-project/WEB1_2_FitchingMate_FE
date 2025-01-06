import { useState, useEffect } from 'react'
import TeamSelectSection from '@components/TeamSelectSection'
import {
  FilterModalButton,
  FilterSelectOptionWrap,
  FilterWrap,
  TeamSelectWrap,
  FilteredMateList,
} from './style'
import PillButton from '@components/PillButton'
import BottomModal from '@components/BottomModal'
import MateFilterOptions from './MateFilterOptions'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'
import { useModal } from '@hooks/useModal'
import { kboTeamList } from '@constants/kboInfo'
import { getMateList } from '@apis/mateListService'
import { useTopRef } from '@hooks/useTopRef'
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import { useInView } from 'react-intersection-observer'
import MainMateCard from '@components/MainMateCard'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import useFilterStore from '@store/useMateListStore'

const MateListPage = () => {
  const {
    selectedFilters,
    selectedTeam,
    setSelectedFilters,
    setSelectedTeam,
    // resetFilters,
  } = useFilterStore()
  const initialTeam = () => {
    const token = localStorage.getItem('token')
    const teamId = localStorage.getItem('teamId')
    return token && teamId ? Number(teamId) : kboTeamList[0].id
  }

  const { bottomModalRef, handleOpenBottomModal, handleCloseBottomModal } =
    useModal()
  const [tempFilters, setTempFilters] = useState(selectedFilters)
  const location = useLocation()
  const { topRef, handleUpButtonClick } = useTopRef()
  const { ref, inView } = useInView()

  useEffect(() => {
    const { isPostSuccess, isEditSuccess, isDeleteSuccess } =
      location.state || {}
    if (isPostSuccess) toast.success('메이트 게시글 등록이 완료되었습니다.')
    if (isEditSuccess) toast.success('메이트 게시글 수정이 완료되었습니다.')
    if (isDeleteSuccess) toast.success('메이트 게시글 삭제가 완료되었습니다.')
  }, [location.state])

  const handleTempFilterChange = (filters: Partial<typeof tempFilters>) => {
    setTempFilters((prevFilters) => ({ ...prevFilters, ...filters }))
  }

  const applyFilters = () => {
    setSelectedFilters(tempFilters)
    handleCloseBottomModal()
  }

  const handleTeamSelect = (team: number | null) => {
    setSelectedTeam(team)
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.MATE_LIST, { selectedTeam, ...selectedFilters }],
      queryFn: ({ pageParam }) =>
        getMateList({ teamId: selectedTeam, ...selectedFilters }, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage: any) =>
        lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
      placeholderData: keepPreviousData,
    })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage()
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  const mateList = data.pages.flatMap((page) => page.content)

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

      <FilteredMateList>
        {mateList.map((mate) => (
          <MainMateCard
            key={mate.postId}
            card={mate}
          />
        ))}
        <div ref={ref} />
      </FilteredMateList>

      <FloatButton
        path={ROUTE_PATH.MATE_POSTING}
        handleUpButtonClick={handleUpButtonClick}
      />

      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions
          onClose={applyFilters}
          selectedFilters={tempFilters}
          onFilterChange={handleTempFilterChange}
        />
      </BottomModal>

      <ToastContainer position='top-center' />
    </section>
  )
}

export default MateListPage

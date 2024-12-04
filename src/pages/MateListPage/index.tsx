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
import MateCard from '@components/MateCard'

import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'
import { useModal } from '@hooks/useModal'
import { kboTeamList } from '@constants/kboInfo'

import { getMateList } from '@apis/mateListService'

const MateListPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(
    kboTeamList[0].id,
  ) // 팀 선택 상태
  const { bottomModalRef, handleOpenBottomModal, handleCloseBottomModal } =
    useModal()
  const [mates, setMates] = useState<any[]>([]) // 메이트 목록 상태

  // 필터 상태
  const [selectedFilters, setSelectedFilters] = useState({
    sortType: '최신 작성일 순',
    age: null,
    gender: null,
    maxParticipants: null,
    transportType: null,
  })

  // 메이트 목록 API 호출
  const fetchMates = async () => {
    try {
      const response = await getMateList({
        teamId: selectedTeam,
        ...selectedFilters,
      })
      setMates(response.data.content)
    } catch (error) {
      console.error('Failed to fetch mates:', error)
    }
  }

  // 팀 선택 핸들러
  const handleTeamSelect = (team: number | null) => {
    setSelectedTeam(team)
  }

  // 필터 변경 핸들러
  const handleFilterChange = (filters: Partial<typeof selectedFilters>) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      ...filters,
    }))
  }

  useEffect(() => {
    fetchMates()
  }, [selectedTeam, selectedFilters]) // 팀 선택 및 필터 변경 시 API 호출

  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection
          selectedTeam={selectedTeam}
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
        {mates.map((card) => (
          <MateCard
            key={card.postId}
            card={card}
          />
        ))}
      </div>

      <FloatButton path={ROUTE_PATH.MATE_POSTING} />

      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions
          onClose={handleCloseBottomModal}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
      </BottomModal>
    </section>
  )
}

export default MateListPage

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

import { getTotalMateList, getMateListByTeam } from '@apis/mateListService'

const MateListPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<number>(kboTeamList[0].id)
  const { bottomModalRef, handleOpenBottomModal } = useModal()
  const [mates, setMates] = useState<any[]>([]) // Mate 데이터 상태

  const fetchMates = async (teamId: number) => {
    try {
      const response =
        teamId === kboTeamList[0].id // 전체 팀인 경우
          ? await getTotalMateList()
          : await getMateListByTeam(teamId) // 특정 팀인 경우
      setMates(response.data.content)
    } catch (error) {
      console.error('Failed to fetch mates:', error)
    }
  }

  const handleTeamSelect = (team: number) => {
    setSelectedTeam(team)
  }

  useEffect(() => {
    fetchMates(selectedTeam)
  }, [selectedTeam])

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
          <p>20대</p>
          <p>남자</p>
        </FilterSelectOptionWrap>
      </FilterWrap>
      <div>
        {mates.map((card) => (
          <MateCard key={card.postId} card={card} />
        ))}
      </div>

      <FloatButton path={ROUTE_PATH.MATE_POSTING} />
      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions />
      </BottomModal>
    </section>
  )
}

export default MateListPage

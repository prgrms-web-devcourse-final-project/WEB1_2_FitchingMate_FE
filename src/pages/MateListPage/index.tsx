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
import { useState, useEffect } from 'react'
import { getTotalMateList } from '@apis/mateListService'

const MateListPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<number>(kboTeamList[0].id)
  const { bottomModalRef, handleOpenBottomModal } = useModal()
  const [loading, setLoading] = useState(false)
  const [mates, setMates] = useState<any[]>([])

  const handleTeamSelect = (team: number) => {
    setSelectedTeam(team)
  }

  useEffect(() => {
    const fetchMates = async () => {
      setLoading(true)
      try {
        const data: any = await getTotalMateList(selectedTeam)
        console.log(data)
        setMates(data.data.content)
      } catch (error) {
        console.error('Failed to fetch mates:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMates()
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          mates.map((mate) => (
            <MateCard
              key={mate.postId}
              card={{
                imageUrl: mate.imageUrl,
                title: mate.title,
                status: mate.status,
                myTeamName: mate.myTeamName,
                rivalTeamName: mate.rivalTeamName,
                matchTime: mate.matchTime,
                location: mate.location,
                maxParticipants: mate.maxParticipants,
                age: mate.age,
                gender: mate.gender,
                transportType: mate.transportType,
                postId: mate.postId,
              }}
            />
          ))
        )}
      </div>

      <FloatButton path={ROUTE_PATH.MATE_POSTING} />
      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions />
      </BottomModal>
    </section>
  )
}

export default MateListPage

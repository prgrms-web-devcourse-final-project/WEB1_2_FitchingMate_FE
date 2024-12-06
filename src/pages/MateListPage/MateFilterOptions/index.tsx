import { FilterButtonWrap, FilterModalLabel, FilterModalWrap } from '../style'
import PillButtonList from '@components/PillButtonList'
import GlobalButton from '@components/GlobalButton'

interface MateFilterOptionsProps {
  onClose: () => void
  onFilterChange: (filters: Record<string, string | null>) => void
  selectedFilters: {
    sortType: string
    age: string | null
    gender: string | null
    maxParticipants: string | null
  }
}

const MateFilterOptions: React.FC<MateFilterOptionsProps> = ({
  onClose,
  onFilterChange,
  selectedFilters,
}) => {
  const options = [
    {
      label: '정렬',
      key: 'sortType',
      value: ['최신 작성일 순', '가까운 경기 순', '매너타율 순'],
    },
    {
      label: '나이대',
      key: 'age',
      value: ['상관 없음', '10대', '20대', '30대', '40대', '50대이상'],
    },
    {
      label: '성별',
      key: 'gender',
      value: ['상관 없음', '남자', '여자'],
    },
    {
      label: '인원',
      key: 'maxParticipants',
      value: ['상관 없음', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명', '10명'],
    },
    {
      label: '이동수단',
      key: 'transportType',
      value: ['상관 없음', '자차', '대중교통'],
    },
  ]

  // 선택 변경 핸들러
  const handleSelect = (key: string, value: string) => {
    onFilterChange({ [key]: value === '상관 없음' ? null : value })
  }

  return (
    <div>
      {options.map((option, index) => (
        <FilterModalWrap key={index}>
          <FilterModalLabel>{option.label}</FilterModalLabel>
          <FilterButtonWrap>
            <PillButtonList
              mode="radio"
              defaultSelected={selectedFilters[option.key as keyof typeof selectedFilters] || ''}
              onSelect={(value) => handleSelect(option.key, value)}
              buttons={option.value.map((value) => ({
                id: value,
                text: value,
                disabled: false,
              }))}
            />
          </FilterButtonWrap>
        </FilterModalWrap>
      ))}
      <GlobalButton $isNavy={true} text="완료" onClick={onClose} />
    </div>
  )
}

export default MateFilterOptions

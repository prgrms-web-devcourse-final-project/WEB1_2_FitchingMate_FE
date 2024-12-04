import { FilterButtonWrap, FilterModalLabel, FilterModalWrap } from '../style'
import PillButtonList from '@components/PillButtonList'
import GlobalButton from '@components/GlobalButton'

interface MateFilterOptionsProps {
  onClose: () => void
}

const MateFilterOptions: React.FC<MateFilterOptionsProps> = ({ onClose }) => {
  const options = [
    {
      label: '정렬',
      value: ['최신 작성일 순', '가까운 경기 순', '매너타율 순'],
    },
    {
      label: '나이대',
      value: ['상관 없음', '10대', '20대', '30대', '40대', '50대 이상'],
    },
    {
      label: '성별',
      value: ['상관 없음', '남자', '여자'],
    },
    {
      label: '인원',
      value: ['상관 없음', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명', '10명'],
    },
    {
      label: '이동수단',
      value: ['상관 없음', '자차', '대중교통'],
    },
  ]

  return (
    <div>
      {options.map((option, index) => {
        return (
          <FilterModalWrap key={index}>
            <FilterModalLabel>{option.label}</FilterModalLabel>
            <FilterButtonWrap>
              <PillButtonList
                mode='radio'
                buttons={[
                  ...option.value.map((value) => {
                    return { id: value, text: value, disabled: false }
                  }),
                ]}
              />
            </FilterButtonWrap>
          </FilterModalWrap>
        )
      })}
      <GlobalButton
        $isNavy={true}
        text='완료'
        onClick={onClose} // props로 받은 onClose 호출
      />
    </div>
  )
}

export default MateFilterOptions

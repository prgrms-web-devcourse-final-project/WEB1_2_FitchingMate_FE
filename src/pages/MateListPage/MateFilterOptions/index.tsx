import { FilterButtonWrap, FilterModalLabel, FilterModalWrap } from '../style'
import PillButtonList from '@components/PillButtonList'
import GlobalButton from '@components/GlobalButton'

const MateFilterOptions = () => {
  const options = [
    {
      label: '정렬',
      value: ['최신 작성일 순', '가까운 경기 순', '매칭타율 순'],
    },
    {
      label: '나이대',
      value: ['10대', '20대', '30대', '40대', '50대 이상', '상관 없음'],
    },
    {
      label: '성별',
      value: ['남자', '여자', '상관 없음'],
    },
    {
      label: '인원',
      value: ['1명', '2명', '3명', '4명', '5명 이상', '상관 없음'],
    },
    {
      label: '이동수단',
      value: ['자차', '카풀', '대중교통', '상관 없음'],
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
      />
    </div>
  )
}

export default MateFilterOptions

import SelectSection from './SelectOption'

const SELECTOPTION_LIST = [
  {
    label: '연령대',
    id: 'age',
    optionList: ['상관없음', '20대', '30대', '40대', '50대이상'],
  },
  {
    label: '인원',
    id: 'maxParticipants',
    optionList: ['2명', '3명', '4명', '5명', '사용자 지정'],
  },
  {
    label: '성별',
    id: 'gender',
    optionList: ['상관없음', '남자', '여자'],
  },
  {
    label: '이동수단',
    id: 'transportType',
    optionList: ['상관없음', '자차', '대중교통'],
  },
] as const

const SecondTab = () => {
  return (
    <>
      {SELECTOPTION_LIST.map(({ id, label, optionList }) => (
        <SelectSection
          key={id}
          id={id}
          label={label}
          optionList={[...optionList]}
        />
      ))}
    </>
  )
}

export default SecondTab

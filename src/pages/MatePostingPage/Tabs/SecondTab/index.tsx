import SelectSection from './SelectOption'

const selectOptionList = [
  {
    label: '연령대',
    id: 'age',
    optionList: ['누구나', '20대', '30대', '40대', '50대 이상'],
  },
  {
    label: '인원',
    id: 'participants',
    optionList: ['2명', '3명', '4명', '5명', '사용자 지정'],
  },
  {
    label: '성별',
    id: 'gender',
    optionList: ['상관없음', '남자만', '여자만'],
  },
  {
    label: '이동수단',
    id: 'transportation',
    optionList: ['상관없음', '자차', '대중교통'],
  },
]

const SecondTab = () => {
  return (
    <>
      {selectOptionList.map((option) => (
        <SelectSection
          key={option.id}
          {...option}
        />
      ))}
    </>
  )
}

export default SecondTab

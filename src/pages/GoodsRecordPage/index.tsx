import SubHeader from '@layouts/SubHeader'
import GoodsRecordBox from './GoodsRecordBox'
import { GoodsSection } from './style'

const GoodsRecordPage = () => {
  return (
    <>
      <SubHeader
        left='back'
        center='굿즈 판매기록'
      />
      <GoodsSection>
        <GoodsRecordBox
          title='쁘띠 대호핑 피규어 팝니다 쁘띠 대호핑 피규어 팝니다'
          price={40000}
          writer='양준혁'
          image='https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20240206075441_1b54f931528a9d36c98db236a5e19d74.jpg'
          createdAt={'2020-02-02'}
        />
        <GoodsRecordBox
          title='쁘띠 대호핑 피규어 팝니다 쁘띠 대호핑 피규어 팝니다'
          price={40000}
          writer='양준혁'
          createdAt={'2020-02-02'}
        />
        <GoodsRecordBox
          title='쁘띠 대호핑 피규어 팝니다 쁘띠 대호핑 피규어 팝니다'
          price={40000}
          writer='양준혁'
          image='https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20240206075441_1b54f931528a9d36c98db236a5e19d74.jpg'
          createdAt={'2020-02-02'}
        />
        <GoodsRecordBox
          title='쁘띠 대호핑 피규어 팝니다 쁘띠 대호핑 피규어 팝니다'
          price={40000}
          writer='양준혁'
          createdAt={'2020-02-02'}
        />
      </GoodsSection>
    </>
  )
}

export default GoodsRecordPage

import ImageSection from './ImageSection'
import TeamSelectSection from './TeamSelectSection'
import ProductNameSection from './ProductNameSection/Index'
import PriceInputSection from './PriceInputSection'
import DescriptionSection from './DescriptionSection'
import useTeamDialog from '@hooks/useTeamDialog'
import BottomModal from '@components/BottomModal'
import BottomModalOption from '@pages/ProfilePage/BottomModalOption'

const FirstTab = () => {
  const { bottomModalRef, handleClickSelectButton, handleTeamSelect } =
    useTeamDialog()

  return (
    <>
      <ImageSection />
      <TeamSelectSection onSelectButton={handleClickSelectButton} />
      <ProductNameSection />
      <PriceInputSection />
      <DescriptionSection />

      {/* 응원팀 선택 모달 */}
      <BottomModal ref={bottomModalRef}>
        <BottomModalOption onSelectTeam={handleTeamSelect} />
      </BottomModal>
    </>
  )
}

export default FirstTab

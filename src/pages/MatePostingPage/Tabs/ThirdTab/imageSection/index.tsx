import ImageInput from '@components/ImageInput'
import { QuestionSection } from '../../FirstTab/style'
import { ImageConainer } from '../style'
import { useMateFormStore } from '@store/useMateFormStore'
import ImageCard from '@pages/GoodsPostingPage/Tabs/FirstTab/ImageSection/ImageCard'

const MAX_IMAGE_COUNT = 1

const ImageSection = () => {
  const { img, setImg } = useMateFormStore()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImg(file)
    }
  }

  const handleDeleteImage = () => {
    setImg(null)
  }
  return (
    <QuestionSection>
      <label htmlFor='category-img'>대표 사진</label>
      <ImageConainer>
        <ImageInput
          disabled={img !== null}
          maxCount={MAX_IMAGE_COUNT}
          currentCount={img ? 1 : 0}
          onChangeImage={handleImageChange}
        />
        <ImageCard
          image={img}
          oneDeleteImage={handleDeleteImage}
        />
      </ImageConainer>
    </QuestionSection>
  )
}

export default ImageSection

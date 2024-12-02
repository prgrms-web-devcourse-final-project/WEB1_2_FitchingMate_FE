import ImageInput from '@components/ImageInput'
import { QuestionSection } from '../../FirstTab/style'
import { ImageConainer } from '../style'
import { useMateFormStore } from '@store/useMateFormStore'
import { ImageCardContainer } from '@pages/GoodsPostingPage/Tabs/FirstTab/ImageSection/ImageCard/style'

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

        {img && (
          <ImageCardContainer>
            <img
              src={URL.createObjectURL(img)}
              alt='선택된 이미지'
            />
            <button onClick={handleDeleteImage}>X</button>
          </ImageCardContainer>
        )}
      </ImageConainer>
    </QuestionSection>
  )
}

export default ImageSection

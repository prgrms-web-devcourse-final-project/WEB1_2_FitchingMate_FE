import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { ButtonContainer } from './style'

import PillButton from '@components/PillButton'

import { useState } from 'react'

const PriceInputSection = () => {
  const [currentPrice, setCurrentPrice] = useState('')
  const [isSale, setIsSale] = useState(true)

  const formatPrice = (price: string) => {
    /**
     * 1. 빈 문자열인 경우 빈 문자열 반환
     * 2. 숫자로 변환 후 콤마 추가
     */
    if (!price) return ''
    return parseInt(price, 10).toLocaleString('ko-KR')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 0으로 시작하는 경우 나눔하기 버튼으로 전환
    if (e.target.value.startsWith('0')) {
      setIsSale(false)
      return
    }

    /**
     * 1. 콤마 제거
     * 2. 숫자 형식 검사
     * 3. 10자 이하 검사
     */

    const priceData = e.target.value.replace(/,/g, '')
    const isValidPrice = /^[0-9]*$/.test(priceData) && priceData.length < 10

    if (isValidPrice) {
      const formattedPrice = formatPrice(priceData)
      setCurrentPrice(formattedPrice)
    }
  }

  const displayValue = isSale ? currentPrice : '0'

  return (
    <QuestionSection>
      <label htmlFor='price'>상품 가격</label>
      <ButtonContainer>
        <PillButton
          text='판매하기'
          $isSelected={isSale}
          onClick={() => setIsSale(true)}
        />
        <PillButton
          text='나눔하기'
          $isSelected={!isSale}
          onClick={() => setIsSale(false)}
        />
      </ButtonContainer>
      <input
        type='text'
        id='price'
        disabled={!isSale}
        value={displayValue}
        onChange={handleInputChange}
      />
    </QuestionSection>
  )
}

export default PriceInputSection

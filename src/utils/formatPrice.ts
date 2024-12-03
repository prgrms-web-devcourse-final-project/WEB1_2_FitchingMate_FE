export const formatPriceWithComma = (price: number) => {
  return price.toLocaleString('ko-KR')
}

export const removeCommaFromPrice = (formattedPrice: string) => {
  return parseInt(formattedPrice.replace(/,/g, ''), 10)
}

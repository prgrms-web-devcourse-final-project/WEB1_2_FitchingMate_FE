export const formatManner = (number: number) => {
  let formattedNumber = number.toFixed(3)

  let [integerPart, decimalPart] = formattedNumber.split('.')

  if (decimalPart[1] !== '0' && decimalPart[2] === '0') {
    return number.toFixed(2) + '0'
  }

  return formattedNumber
}

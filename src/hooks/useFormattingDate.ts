const useFormattingDate = (createdAt: string) => {
  const date = new Date(createdAt)

  const year = date.getFullYear()
  const month = ('-' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  return `${year}년 ${month}월 ${day}일`
}

export default useFormattingDate

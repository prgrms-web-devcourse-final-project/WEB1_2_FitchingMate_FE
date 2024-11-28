class TabModel {
  title?: string
  currentButton: { previous: boolean; next: boolean; isSubmit?: boolean }
  content: React.ReactNode

  constructor(
    content: React.ReactNode,
    currentButton: { previous: boolean; next: boolean; isSubmit?: boolean },
    title?: string,
  ) {
    this.content = content
    this.currentButton = currentButton
    this.title = title
  }
}

export default TabModel

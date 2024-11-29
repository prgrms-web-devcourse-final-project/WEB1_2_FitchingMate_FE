class TabModel {
  title?: string
  content: React.ReactNode

  constructor(content: React.ReactNode, title?: string) {
    this.content = content
    this.title = title
  }
}

export default TabModel

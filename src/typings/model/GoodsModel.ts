export class Location {
  addressName: string
  placeName: string
  roadAddressName: string

  constructor(addressName: string, placeName: string, roadAddressName: string) {
    this.addressName = addressName
    this.placeName = placeName
    this.roadAddressName = roadAddressName
  }
}

export class PostData {
  teamId: string
  title: string
  category: string
  price: string
  content: string
  location: Location

  constructor(
    teamId: string,
    title: string,
    category: string,
    price: string,
    content: string,
    location: Location,
  ) {
    this.teamId = teamId
    this.title = title
    this.category = category
    this.price = price
    this.content = content
    this.location = location
  }
}

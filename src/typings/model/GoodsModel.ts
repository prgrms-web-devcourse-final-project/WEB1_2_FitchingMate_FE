export class Location {
  latitude: string
  longitude: string
  placeName: string

  constructor(latitude: string, longitude: string, placeName: string) {
    this.latitude = latitude
    this.longitude = longitude
    this.placeName = placeName
  }
}

export class GoodsModel {
  teamId: string
  title: string
  category: string
  price: string
  content: string
  location: Location
  imageList: File[]

  constructor(
    teamId: string,
    title: string,
    category: string,
    price: string,
    content: string,
    location: Location,
    imageList: File[],
  ) {
    this.teamId = teamId
    this.title = title
    this.category = category
    this.price = price
    this.content = content
    this.location = location
    this.imageList = imageList
  }
}

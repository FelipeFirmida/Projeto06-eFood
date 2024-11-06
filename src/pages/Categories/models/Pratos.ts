class Pratos {
  description: string
  image: string
  title: string
  id: number
  resturantId: number

  constructor(
    description: string,
    image: string,
    title: string,
    id: number,
    restaurantId: number
  ) {
    this.description = description
    this.image = image
    this.title = title
    this.id = id
    this.resturantId = restaurantId
  }
}

export default Pratos

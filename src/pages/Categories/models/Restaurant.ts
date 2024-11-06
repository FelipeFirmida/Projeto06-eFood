class Restaurant {
  category: string
  description: string
  image: string
  score: number
  title: string
  id: number
  highlight?: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    score: number,
    title: string,
    highlight?: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.score = score
    this.title = title
    this.highlight = highlight
  }
}

export default Restaurant

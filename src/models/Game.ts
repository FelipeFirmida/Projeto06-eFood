class Game {
  category: string
  description: string
  image: string
  score: number
  title: string
  highlight?: string
  id: number

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

export default Game

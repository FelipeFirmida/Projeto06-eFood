import Game from '../../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  games: Game[]
}

const ProductsList = ({ games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            score={game.score}
            title={game.title}
            highlight={game.highlight}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList

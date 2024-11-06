import Pratos from '../../../pages/Categories/models/Pratos'
import Prato from '../Prato'
import { Container, List } from './styles'

export type Props = {
  pratos: Pratos[]
}

const PratosList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Prato
            key={prato.id}
            description={prato.description}
            image={prato.image}
            title={prato.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PratosList

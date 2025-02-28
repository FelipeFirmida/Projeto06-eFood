import { Restaurante } from '../../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => {
            return (
              <Product
                key={restaurante.id}
                id={restaurante.id}
                tipo={restaurante.tipo}
                descricao={restaurante.descricao}
                capa={restaurante.capa}
                avaliacao={restaurante.avaliacao}
                titulo={restaurante.titulo}
                destacado={restaurante.destacado}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

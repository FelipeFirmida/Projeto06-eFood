import { Card, Descricao, Titulo, Titulos } from './styles'

import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const Prato = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulos>
      <Titulo>{title}</Titulo>
    </Titulos>
    <Descricao>{description}</Descricao>
    <Button type="button" title={title}>
      Adicionar ao Carrinho
    </Button>
  </Card>
)

export default Prato

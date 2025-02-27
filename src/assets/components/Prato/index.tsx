import { Card, Descricao, Titulo, Titulos } from './styles'

import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const Prato = ({ title, description, image, onClick }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulos>
      <Titulo>{title}</Titulo>
    </Titulos>
    <Descricao>{description}</Descricao>
    <Button type="button" title={title} onClick={onClick}>
      Mais detalhes
    </Button>
  </Card>
)

export default Prato

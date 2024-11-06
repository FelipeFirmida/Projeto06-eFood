import Tag from '../Tag'

import { Card, Descricao, Titulo, Nota, Titulos, TagHigh } from './styles'

import estrela from '../../images/estrela.png'
import Button from '../Button'

type Props = {
  title: string
  category: string
  score: number
  description: string
  image: string
  highlight?: string
}

const Product = ({
  title,
  category,
  score,
  description,
  highlight,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulos>
      <Titulo>{title}</Titulo>
      <Nota>
        {score} <img src={estrela} alt="Estrela" />
      </Nota>
    </Titulos>
    {highlight && <TagHigh>{highlight}</TagHigh>}
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
    <Button type="link" title={title}>
      Saiba mais
    </Button>
  </Card>
)

export default Product

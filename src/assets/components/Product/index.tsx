import Tag from '../Tag'

import { Card, Descricao, Titulo, Nota, Titulos, TagHigh } from './styles'

import estrela from '../../images/estrela.png'

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
  </Card>
)

export default Product

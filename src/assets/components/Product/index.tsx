import Tag from '../Tag'
import { Restaurante } from '../../../pages/Home'
import { Card, Descricao, Titulo, Nota, Titulos, TagHigh } from './styles'

import estrela from '../../images/estrela.png'
import Button from '../Button'

type Props = Restaurante

const Product = ({
  id,
  titulo,
  tipo,
  avaliacao,
  descricao,
  destacado,
  capa
}: Props) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Titulos>
        <Titulo>{titulo}</Titulo>
        <Nota>
          {avaliacao} <img src={estrela} alt="Estrela" />
        </Nota>
      </Titulos>
      {destacado && <TagHigh>{destacado}</TagHigh>}
      <Tag>{tipo}</Tag>
      <Descricao>{descricao}</Descricao>
      <Button type="link" to={`restaurante/${id}`} title={titulo}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Product

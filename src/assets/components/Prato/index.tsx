import { Card, Descricao, Titulo, Titulos } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
  porcao: string
  preco: string
  onClick: () => void
}

const Prato = ({ title, description, image, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 119) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Titulos>
        <Titulo>{title}</Titulo>
      </Titulos>
      <Descricao>{getDescricao(description)}</Descricao>
      <Button type="button" title={title} onClick={onClick}>
        Mais detalhes
      </Button>
    </Card>
  )
}

export default Prato

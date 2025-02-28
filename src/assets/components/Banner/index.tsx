import { Imagem, Tipo, Titulo } from './styles'

interface Props {
  imagem: string
  tipo: string
  titulo: string
}

const Banner = ({ imagem, tipo, titulo }: Props) => (
  <Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <Tipo>{tipo}</Tipo>
      <Titulo>{titulo}</Titulo>
    </div>
  </Imagem>
)

export default Banner

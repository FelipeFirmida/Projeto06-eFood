import { Imagem, Tipo, Titulo } from './styles'

import macarrao from '../../images/macarrao-banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${macarrao})` }}>
    <div className="container">
      <Tipo>Italiana</Tipo>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner

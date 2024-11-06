import { HeaderCarrinho } from './styles'

import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const HeaderCart = () => (
  <HeaderCarrinho>
    <div className="container">
      <h2>Restaurantes</h2>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <h2>0 produto(s) no carrinho</h2>
    </div>
  </HeaderCarrinho>
)

export default HeaderCart

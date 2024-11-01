import { HeaderBar } from './styles'

import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <h2>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h2>
    </div>
  </HeaderBar>
)

export default Header

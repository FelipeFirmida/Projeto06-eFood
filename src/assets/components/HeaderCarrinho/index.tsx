import { HeaderCarrinho } from './styles'

import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '../Button'

import { open } from '../../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

const HeaderCart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderCarrinho>
      <div className="container">
        <h2>Restaurantes</h2>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <Button onClick={openCart} type="button" title="Ver carrinho">
          {`${items.length} produto(s) no carrinho`}
        </Button>
      </div>
    </HeaderCarrinho>
  )
}

export default HeaderCart

// max-width: 256px;
// width: 100%;

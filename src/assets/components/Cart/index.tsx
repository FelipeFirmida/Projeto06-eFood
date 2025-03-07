import Button from '../Button'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'

import pizza from '../../images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../PratosList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor Total <span> {formataPreco(getTotalPrice())} </span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="deliver">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

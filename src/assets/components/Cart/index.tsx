import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Button from '../Button'

import { RootReducer } from '../../../store'
import { clear, close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../PratosList'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  InputCart,
  Row,
  EndP,
  Warn
} from './styles'
import { PurchasePayload, usePurchaseMutation } from '../../../services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const deliveryFormik = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      comp: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(2, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      comp: Yup.string()
    }),
    onSubmit: () => {
      console.log('Delivery form submitted')
    }
  })

  const paymentFormik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(
          5,
          'O nome do titular do cartão precisa ter pelo menos 5 caracteres'
        )
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O número do cartão precisa ter pelo menos 16 caracteres')
        .max(16, 'O número do cartão precisa ter pelo menos 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV precisa ter 3 caracteres')
        .max(3, 'O CVV precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      month: Yup.string()
        .min(2, 'O mês de vencimento precisa ter 2 caracteres')
        .max(2, 'O mês de vencimento precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      year: Yup.string()
        .min(2, 'O ano de vencimento precisa ter 2 caracteres')
        .max(2, 'O ano de vencimento precisa ter 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: () => {
      console.log('Purchase form submitted')
    }
  })

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulator, currentItem) => {
      if (currentItem.preco) {
        return (acumulator += currentItem.preco)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const [currentStep, setCurrentStep] = useState<
    'cart' | 'delivery' | 'payment' | 'end'
  >('cart')

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const checkDeliveryHasError = (fieldName: string) => {
    const isTouched = fieldName in deliveryFormik.touched
    const isInvalid = fieldName in deliveryFormik.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkPaymentHasError = (fieldName: string) => {
    const isTouched = fieldName in paymentFormik.touched
    const isInvalid = fieldName in paymentFormik.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleConfirmation = async () => {
    const purchasePayload: PurchasePayload = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: deliveryFormik.values.name,
        adress: {
          description: deliveryFormik.values.adress,
          city: deliveryFormik.values.city,
          zipCode: deliveryFormik.values.cep,
          number: Number(deliveryFormik.values.number),
          complement: deliveryFormik.values.comp
        }
      },
      payment: {
        card: {
          name: paymentFormik.values.cardName,
          number: paymentFormik.values.cardNumber,
          code: Number(paymentFormik.values.cvv),
          expires: {
            month: Number(paymentFormik.values.month),
            year: Number(paymentFormik.values.year)
          }
        }
      }
    }

    try {
      await purchase(purchasePayload).unwrap()
      setCurrentStep('end')
    } catch (error) {
      console.error('Failed to submit purchase:', error)
    }
  }

  const endCart = () => {
    alert('Compra confirmada! Obrigado pela preferência!')
    closeCart()
    setCurrentStep('cart')
  }

  const renderCart = () => (
    <>
      {items.length === 0 && (
        <Warn style={{ color: 'red', textAlign: 'center' }}>
          O carrinho está vazio. Adicione 1 ou mais itens para continuar.
        </Warn>
      )}
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
      <Button
        onClick={() => {
          if (items.length > 0) {
            setCurrentStep('delivery')
          }
        }}
        title="Clique aqui para continuar com a compra"
        type="deliver"
        disabled={items.length === 0}
      >
        Continuar com a entrega
      </Button>
    </>
  )

  const renderDelivery = () => (
    <>
      <h2>Entrega</h2>
      <form onSubmit={deliveryFormik.handleSubmit}>
        <div>
          <label htmlFor="name">Quem irá receber</label>
          <InputCart
            className={checkDeliveryHasError('name') ? 'error' : ''}
            type="text"
            id="name"
            name="name"
            value={deliveryFormik.values.name}
            onChange={deliveryFormik.handleChange}
            onBlur={deliveryFormik.handleBlur}
          />
          <label htmlFor="adress">Endereço</label>
          <InputCart
            type="text"
            id="adress"
            name="adress"
            value={deliveryFormik.values.adress}
            onChange={deliveryFormik.handleChange}
            onBlur={deliveryFormik.handleBlur}
            className={checkDeliveryHasError('adress') ? 'error' : ''}
          />
          <label htmlFor="city">Cidade</label>
          <InputCart
            type="text"
            id="city"
            name="city"
            value={deliveryFormik.values.city}
            onChange={deliveryFormik.handleChange}
            onBlur={deliveryFormik.handleBlur}
            className={checkDeliveryHasError('city') ? 'error' : ''}
          />
          <Row>
            <div>
              <label htmlFor="cep">CEP</label>
              <InputCart
                type="text"
                id="cep"
                name="cep"
                value={deliveryFormik.values.cep}
                onChange={deliveryFormik.handleChange}
                onBlur={deliveryFormik.handleBlur}
                className={checkDeliveryHasError('cep') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <InputCart
                type="text"
                id="number"
                name="number"
                value={deliveryFormik.values.number}
                onChange={deliveryFormik.handleChange}
                onBlur={deliveryFormik.handleBlur}
                className={checkDeliveryHasError('number') ? 'error' : ''}
              />
            </div>
          </Row>
          <label htmlFor="comp">Complemento (opcional)</label>
          <InputCart
            type="text"
            id="comp"
            name="comp"
            value={deliveryFormik.values.comp}
            onChange={deliveryFormik.handleChange}
            onBlur={deliveryFormik.handleBlur}
            className={checkDeliveryHasError('comp') ? 'error' : ''}
          />
        </div>
      </form>
      <Button
        onClick={async () => {
          await deliveryFormik.validateForm() // Trigger validation
          if (deliveryFormik.isValid && deliveryFormik.dirty) {
            setCurrentStep('payment')
          }
        }}
        type="deliver"
        title="Continuar com o pagamento"
        disabled={!deliveryFormik.isValid || !deliveryFormik.dirty}
      >
        Continuar com o pagamento
      </Button>
      <Button
        onClick={() => setCurrentStep('delivery')}
        type="deliver"
        title="Voltar para o carrinho"
      >
        Voltar para o carrinho
      </Button>
    </>
  )

  const renderPayment = () => (
    <>
      <h2>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h2>
      <form onSubmit={paymentFormik.handleSubmit}>
        <div>
          <label htmlFor="cardName">Nome no cartão</label>
          <InputCart
            type="text"
            id="cardName"
            name="cardName"
            value={paymentFormik.values.cardName}
            onChange={paymentFormik.handleChange}
            onBlur={paymentFormik.handleBlur}
            className={checkPaymentHasError('cardname') ? 'error' : ''}
          />

          <Row>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputCart
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentFormik.values.cardNumber}
                onChange={paymentFormik.handleChange}
                onBlur={paymentFormik.handleBlur}
                className={checkPaymentHasError('cardnumber') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <InputCart
                type="text"
                id="cvv"
                name="cvv"
                value={paymentFormik.values.cvv}
                onChange={paymentFormik.handleChange}
                onBlur={paymentFormik.handleBlur}
                className={checkPaymentHasError('cvv') ? 'error' : ''}
              />
            </div>
          </Row>
          <Row>
            <div>
              <label htmlFor="month">Mês de vencimento</label>
              <InputCart
                type="text"
                id="month"
                name="month"
                value={paymentFormik.values.month}
                onChange={paymentFormik.handleChange}
                onBlur={paymentFormik.handleBlur}
                className={checkPaymentHasError('month') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="year">Ano de vencimento</label>
              <InputCart
                type="text"
                id="year"
                name="year"
                value={paymentFormik.values.year}
                onChange={paymentFormik.handleChange}
                onBlur={paymentFormik.handleBlur}
                className={checkPaymentHasError('year') ? 'error' : ''}
              />
            </div>
          </Row>
        </div>
      </form>
      <Button
        onClick={async () => {
          await paymentFormik.validateForm() // Trigger validation
          if (paymentFormik.isValid && paymentFormik.dirty) {
            handleConfirmation()
          }
        }}
        type="deliver"
        title="Finalizar com o pagamento"
        disabled={!paymentFormik.isValid || !paymentFormik.dirty}
      >
        Finalizar com o pagamento
      </Button>
      <Button
        onClick={() => setCurrentStep('cart')}
        type="deliver"
        title="Voltar para a edição do endereço"
      >
        Voltar para a edição de endereço
      </Button>
    </>
  )

  const renderEnd = () => {
    return (
      <>
        {isSuccess && data ? (
          <>
            <h2>Pedido realizado - {data.orderId}</h2>
            <EndP>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br /> <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br /> <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br /> <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </EndP>
            <Button onClick={endCart} type="deliver" title="Compra concluída">
              Concluir
            </Button>
          </>
        ) : (
          <p>Algo deu errado </p>
        )}
      </>
    )
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {currentStep === 'cart' && renderCart()}
        {currentStep === 'delivery' && renderDelivery()}
        {currentStep === 'payment' && renderPayment()}
        {currentStep === 'end' && renderEnd()}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

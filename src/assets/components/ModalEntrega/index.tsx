import React from 'react'
import Button from '../Button'

import { Overlay, ModalContainer } from './styles'

interface ModalEntregaProps {
  isVisible: boolean
  onPrevious: () => void
  onNext: () => void
}

const ModalEntrega: React.FC<ModalEntregaProps> = ({
  isVisible,
  onPrevious,
  onNext
}) => {
  if (!isVisible) return null

  return (
    <Overlay>
      <ModalContainer>
        <h2>Entrega</h2>
        <form>
          <input type="text" placeholder="Quem irá receber" />
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento (opcional)" />
        </form>
        <Button
          onClick={onNext}
          type="deliver"
          title="Continuar com o pagamento"
        >
          Continuar com o pagamento
        </Button>
        <Button
          onClick={onPrevious}
          type="deliver"
          title="Voltar para o carrinho"
        >
          Voltar para o carrinho
        </Button>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalEntrega

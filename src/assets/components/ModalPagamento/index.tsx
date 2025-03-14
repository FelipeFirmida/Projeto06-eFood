import React from 'react'
import Button from '../Button'

import { Overlay, ModalContainer } from './styles'

interface ModalPagamentoProps {
  isVisible: boolean
  onPrevious: () => void
  onNext: () => void
}

const ModalPagamento: React.FC<ModalPagamentoProps> = ({
  isVisible,
  onPrevious,
  onNext
}) => {
  if (!isVisible) return null

  return (
    <Overlay>
      <ModalContainer>
        <h2>Pagamento - Valor a pagar R$ 190,90</h2>
        <form>
          <input type="text" placeholder="Nome no cartão" />
          <input type="text" placeholder="Número do cartão" />
          <input type="text" placeholder="CVV" />
          <input type="text" placeholder="Mês de vencimento" />
          <input type="text" placeholder="Ano de vencimento" />
        </form>
        <Button
          onClick={onNext}
          type="deliver"
          title="Finalizar com o pagamento"
        >
          Finalizar com o pagamento
        </Button>
        <Button
          onClick={onPrevious}
          type="deliver"
          title="Voltar para a edição do endereço"
        >
          Voltar para a edição de endereço
        </Button>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalPagamento

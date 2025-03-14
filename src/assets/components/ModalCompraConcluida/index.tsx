import React from 'react'
import Button from '../Button'

import { Overlay, ModalContainer } from './styles'

interface ModalCompraConcluidaProps {
  isVisible: boolean
  onNext: () => void
}

const ModalCompraConcluida: React.FC<ModalCompraConcluidaProps> = ({
  isVisible,
  onNext
}) => {
  if (!isVisible) return null

  return (
    <Overlay>
      <ModalContainer>
        <h2>Pedido realizado - ORDER_ID</h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button onClick={onNext} type="deliver" title="Compra concluída">
          Concluir
        </Button>
      </ModalContainer>
    </Overlay>
  )
}

export default ModalCompraConcluida

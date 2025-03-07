import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { PratoItem } from '../../../pages/Home'
import Prato from '../Prato'
import { Container, List, Modal, ModalContent } from './styles'

import close from '../../images/close.png'
import Button from '../Button'
import { add, open } from '../../../store/reducers/cart'

export type Props = {
  pratos: PratoItem[]
}

interface ModalState {
  isVisible: boolean
  prato?: PratoItem
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const PratosList = ({ pratos }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const openModal = (prato: PratoItem) => {
    setModal({
      isVisible: true,
      prato: prato
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const dispatch = useDispatch()

  const addToCart = (prato: PratoItem) => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {pratos.map((prato) => (
              <Prato
                key={prato.id}
                description={prato.descricao}
                image={prato.foto}
                title={prato.nome}
                porcao={prato.porcao}
                preco={formataPreco(prato.preco)}
                onClick={() => openModal(prato)}
              />
            ))}
          </List>
        </div>
      </Container>

      {modal.prato && (
        <Modal className={modal.isVisible ? 'visible' : ''}>
          <ModalContent>
            <header>
              <img
                src={close}
                alt="Ícone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </header>
            <img src={modal.prato.foto} />
            <div className="content">
              <h4>{modal.prato.nome}</h4>
              <p>{modal.prato.descricao}</p>
              <p>Serve de {modal.prato.porcao}</p>
              <Button
                preco={formataPreco(modal.prato.preco)}
                type="cart"
                title="Adicionar o produto no carrinho"
                onClick={() => addToCart(modal.prato!)}
              ></Button>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </>
  )
}

export default PratosList

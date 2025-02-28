import { useState } from 'react'

import { PratoItem } from '../../../pages/Home'
import Prato from '../Prato'
import { Container, List, Modal, ModalContent } from './styles'

import close from '../../images/close.png'
import Button from '../Button'

export type Props = {
  pratos: PratoItem[]
}

interface ModalState {
  isVisible: boolean
  prato?: PratoItem
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

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
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
                title="Teste"
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

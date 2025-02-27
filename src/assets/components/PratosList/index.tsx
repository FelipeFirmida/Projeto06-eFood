import Pratos from '../../../pages/Categories/models/Pratos'
import Prato from '../Prato'
import { Container, List, Modal, ModalContent } from './styles'

import close from '../../images/close.png'
import pizza from '../../images/pizza.png'
import Button from '../Button'
import { useState } from 'react'

export type Props = {
  pratos: Pratos[]
}

interface ModalState {
  isVisible: boolean
  title?: string
  description?: string
  image?: string
}

const PratosList = ({ pratos }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const openModal = (prato: Pratos) => {
    setModal({
      isVisible: true,
      title: prato.title,
      description: prato.description,
      image: prato.image
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {pratos.map((prato) => (
              <Prato
                key={prato.id}
                description={prato.description}
                image={prato.image}
                title={prato.title}
                onClick={() => openModal(prato)}
              />
            ))}
          </List>
        </div>
      </Container>

      {modal.isVisible && (
        <Modal>
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
            <img src={pizza} />
            <div className="content">
              <h4>Pizza Marguerita</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <Button type="cart" title="wat"></Button>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </>
  )
}

export default PratosList

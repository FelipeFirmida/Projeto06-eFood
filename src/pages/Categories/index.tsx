import { useEffect, useState } from 'react'
import { PratoItem } from '../Home'
import PratosList from '../../assets/components/PratosList'
import { Restaurante } from '../Home'
import Banner from '../../assets/components/Banner'
import HeaderCart from '../../assets/components/HeaderCarrinho'
import { useParams } from 'react-router-dom'

const Categories = () => {
  const [pratos, setPratos] = useState<PratoItem[]>([])
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurante(res)
        setPratos(res.cardapio)
      })
  }, [id])

  if (!restaurante) {
    return <h3>Restaurante não encontrado</h3>
  }
  return (
    <>
      <HeaderCart></HeaderCart>
      <Banner
        imagem={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <PratosList pratos={pratos} />
    </>
  )
}

export default Categories

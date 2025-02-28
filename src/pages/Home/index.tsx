import ProductsList from '../../assets/components/ProductsList'
import Header from '../../assets/components/Header'
import { useEffect, useState } from 'react'

export type PratoItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id?: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: PratoItem[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header></Header>
      <ProductsList restaurantes={restaurantes} />
    </>
  )
}

export default Home

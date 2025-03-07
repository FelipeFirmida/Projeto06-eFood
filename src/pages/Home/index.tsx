import ProductsList from '../../assets/components/ProductsList'
import Header from '../../assets/components/Header'
import { useEffect, useState } from 'react'

import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <Header></Header>
        <ProductsList restaurantes={restaurantes} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home

import { useEffect, useState } from 'react'
import { PratoItem } from '../Home'
import PratosList from '../../assets/components/PratosList'
import Banner from '../../assets/components/Banner'
import HeaderCart from '../../assets/components/HeaderCarrinho'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

const Categories = () => {
  const [pratos, setPratos] = useState<PratoItem[]>([])

  const { id } = useParams<{ id: string }>()
  const { data: restaurante } = useGetRestaurantQuery(id!)

  useEffect(() => {
    if (restaurante && restaurante.cardapio) {
      setPratos(restaurante.cardapio)
    }
  }, [restaurante])
  if (!restaurante) {
    return <h3>Carregando...</h3>
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

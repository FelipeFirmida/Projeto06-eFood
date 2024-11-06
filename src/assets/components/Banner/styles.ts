import styled from 'styled-components'
import { cores } from '../../../styles'

export const Imagem = styled.div`
  width: auto;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  max-width: 450px;
  color: ${cores.branca};
`

export const Tipo = styled.h2`
  font-size: 32px;
  max-width: 450px;
  color: ${cores.branca};
  font-weight: 100;
  margin-top: 24px;
  margin-bottom: 132px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

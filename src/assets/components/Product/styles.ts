import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid #e66767;
  padding-bottom: 12px;
  position: relative;
  margin-bottom: 48px;
  > img {
    width: 100%;
    aspect-ratio: 2.18 / 1;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
`

export const Nota = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-right: 8px;

  img {
    margin-left: 8px;
  }
`
export const Titulos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TagHigh = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  position: absolute;
  top: 16px;
  right: 80px;
`

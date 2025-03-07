import styled from 'styled-components'
import { cores } from '../../../styles'
import fechar from '../../images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left; 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${cores.rosaClaro};

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.rosaClaro};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  color: ${cores.vermelho};
  background-color: ${cores.rosaClaro};
  padding-right: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    font-weight: 900px;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400px;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

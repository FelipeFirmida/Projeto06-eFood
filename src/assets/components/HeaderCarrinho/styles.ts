import styled from 'styled-components'
import { cores } from '../../../styles'
import fundoHome from '../../images/fundo-home.png'

export const HeaderCarrinho = styled.header`
  background-image: url(${fundoHome});
  background-size: cover;
  padding: 24px;
  align-items: center;

  h2,
  button {
    color: ${cores.vermelho};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }

  h2 {
    margin-right: 48px;
  }

  a {
    margin: 64px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 125px;
    height: auto;
    margin: 0 8px;
  }

  button {
    border: none;
    background-color: transparent;
    width: auto;
    padding: 0;
  }
`

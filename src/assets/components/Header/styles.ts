import styled from 'styled-components'
import { cores } from '../../../styles'
import fundoHome from '../../images/fundo-home.png'

export const HeaderBar = styled.header`
  background-image: url(${fundoHome});
  background-size: cover;
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: ${cores.vermelho};
    text-decoration: none;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 40px;
    margin-top: 132px;
    text-align: center;
  }

  a {
    margin-top: 64px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

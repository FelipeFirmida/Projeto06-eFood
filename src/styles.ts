import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#333',
  vermelho: '#E66767',
  rosaClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

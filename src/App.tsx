import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './assets/components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './assets/components/Footer'
import { store } from './store'
import Cart from './assets/components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App

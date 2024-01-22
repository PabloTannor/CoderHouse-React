import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './Componentes/NavBar/NavBar'
import { CarritoProvider } from './context/CarritoCotext'
import Cart from './Componentes/Cart/Cart'
import { Chekout } from './Componentes/Checkout/Chekout'

import './App.css'

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <CarritoProvider>
          <NavBar/>

          <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}></Route>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="/checkout" element={<Chekout/>}></Route>
              <Route path="*" element={<h2>Sitio en construccion</h2>}></Route>
          </Routes>
        </CarritoProvider>
        
      </BrowserRouter>
        
    </div>
  )
}

export default App
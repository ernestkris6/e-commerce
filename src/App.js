import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Product from './pages/shop/Product';
import { ShopContextProvider } from './context/Shop-context';





function App(){
  return (
    <div className='App'>

      <ShopContextProvider>
      <Router>
          
          <Routes>
              <Route path='/' element={<Shop />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='./product' element={<Product />}/>
          </Routes>   
      </Router>        
      </ShopContextProvider>
       

    </div>
  )
}

export default App;
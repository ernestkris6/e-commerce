import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Product from './pages/shop/Product';





function App(){
  return (
    <div className='App'>

        <Router>
          
            <Routes>
                <Route path='/' element={<Shop />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='./product' element={<Product />}/>
            </Routes>   
        </Router>        

    </div>
  )
}

export default App;
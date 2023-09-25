import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';


function App(){
  return (
    <div className='App'>

        <Router>
          
            <Routes>
                <Route path='/' element={<Shop />}/>
                <Route path='/cart'/>
              
            </Routes>   
        </Router>        

    </div>
  )
}

export default App;
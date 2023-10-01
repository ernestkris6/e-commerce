import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Item } from '../../components/Item';
import Product from './Product';
import './Shop.css';





const Shop = () => {
  return (
    <div>
        <Navbar/>

        <div className=''>
          <div className='shopTitle'>
            <h1>KrisTech Shop</h1>
          </div>
          <div className='products'>
            {Item.map( items=> 
            <Product data={items} />)}
          </div>

        </div>
    </div>
  );
};

export default Shop;
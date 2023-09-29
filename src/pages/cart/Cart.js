import React, {useContext} from 'react'
import { Navbar } from '../../components/Navbar';
import { Item } from '../../components/Item';
import {ShopContext} from '../../context/Shop-context';

import CartItem from './CartItem';



const Cart = () => {

  const {cartItems} = useContext(ShopContext);

  return (
    <div>
        <Navbar />

        <div className='cart'>
          <div>
              <h1>Your Cart Items</h1>
          </div>

          <div className='cartItems'>
              {Item.map((items)=>{
                  if (cartItems [items.id] !== 0) {
                    return <CartItem data={items} />

                  }
              })}
          </div>
        </div>
    </div>
  )
}


export default Cart;

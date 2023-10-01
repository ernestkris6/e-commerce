import React, {useContext} from 'react'
import { Navbar } from '../../components/Navbar';
import { Item } from '../../components/Item';
import {ShopContext} from '../../context/Shop-context';

import CartItem from './CartItem';

import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount =  getTotalCartAmount();

  const navigate = useNavigate()

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
          {totalAmount > 0 ? (
              <div className='checkout'>
                  
                  <h2 className='total'> Subtotal : $ {totalAmount}</h2>
                  <button onClick={()=> navigate("/")} >Continue Shopping</button>
                  <button onClick={()=> navigate("/")}>Checkout</button>
                  
              </div>
  ) : (
    <h2>Your Shopping Cart is Empty!</h2>
  )}
         
        </div>
    </div>
  )
}


export default Cart;

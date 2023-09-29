import React, { useState, createContext } from 'react';
import Item from '../components/Item';

export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i =1; i < Item.length +1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const shopContextProvider = () => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
  return (

     <shopContext.Provider>{props.children}</shopContext.Provider>
  )
}

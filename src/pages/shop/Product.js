import React, { useContext } from 'react'
import {ShopContext} from '../../context/Shop-context';

const Product = (props) => {

    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];

  return (
    <div className='product'>
      <img src={productImage} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <button className='addToCartButton' onClick={()=> addToCart(id)}>
        Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  )
}

export default Product;

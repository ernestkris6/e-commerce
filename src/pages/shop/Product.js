import React, { useContext } from 'react'
import {ShopContext} from '../../context/ShopContext';

const Product = (props) => {

    const {id, productName, price, productImage} = props.data;
    const {addToCart} = useContext()

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
      <button className='addToCartButton' onClick={()=> addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default Product;

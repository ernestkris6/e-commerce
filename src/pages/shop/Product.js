import React from 'react'

const Product = (props) => {

    const {id, productName, price, productImage} = props.data;

  return (
    <div className='product'>
      <img src={productImage} />

    </div>
  )
}

export default Product;

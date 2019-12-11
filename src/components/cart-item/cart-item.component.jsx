import React from "react";
import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl, name, price, quantity}}) => {
  return (
    <section className='cart-item'>
      <img src={imageUrl} alt='item added to the shop cart' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </section>
  )
}

export default CartItem;

import React from 'react';
// import { connect } from 'react-redux';
// import {createStructuredSelector} from 'reselect';
import './checkout-item.styles.scss';

// Component Dependencies

// import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckOutItem = ({cartItem: {imageUrl, name, quantity, price}}) => {
  return (
    <section className='checkout-item'>
      <picture className='image-container'>
        <img src={imageUrl} alt='item in your checkout ready to buy'/>
      </picture>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>${price}</span>
      <div className='remove-button'>&#10005;</div>
    </section>
  )
}



export default CheckOutItem;

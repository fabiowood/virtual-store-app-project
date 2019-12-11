import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

// Component Dependencies

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => {
  return (
    <section className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton >Go to Checkout</CustomButton>
    </section>
  )
}

const mapStateToProps = state => {
  return (
    {cartItems: state.cart.cartItems}
  )
}

export default connect(mapStateToProps)(CartDropdown);

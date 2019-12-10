import React from 'react';

import './cart-dropdown.styles.scss';

// Component Dependencies

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
  return (
    <section className='cart-dropdown'>
      <div className='cart-items'>Cart-Items</div>
      <CustomButton >Go to Checkout</CustomButton>
    </section>
  )
}

export default CartDropdown;

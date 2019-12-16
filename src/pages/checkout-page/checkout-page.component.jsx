import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartItemsTotalValue } from '../../redux/cart/cart.selectors';
import './checkout-page.styles.scss';

// Component Dependencies

import CheckOutItem from '../../components/checkout-item/checkout-item';

const CheckOutPage = ({ cartItems, cartTotalValue }) => {
  return (
    <section className='checkout-page'>
      <header className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </header>
      <div>
        {
        cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
        }
      </div>
      <div className='total'>TOTAL: ${cartTotalValue}</div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalValue: selectCartItemsTotalValue
});

export default connect(mapStateToProps)(CheckOutPage);

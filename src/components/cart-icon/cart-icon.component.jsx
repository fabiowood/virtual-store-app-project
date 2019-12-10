import React from 'react';
// import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { setCartDropdownDisplay } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({setCartDropdownDisplay}) => {
  return (
    <section className='cart-icon' onClick={setCartDropdownDisplay}>
      <ShoppingBagIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  setCartDropdownDisplay: () => dispatch(setCartDropdownDisplay())
});

export default connect(null, mapDispatchToProps)(CartIcon);
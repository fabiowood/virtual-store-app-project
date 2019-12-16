import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.styles.scss';

// Component Dependencies

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setCartDropdownDisplay } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <section className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length 
          ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          :
          <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(setCartDropdownDisplay());
        }
       }
      >
      Go to Checkout</CustomButton>
    </section>
  )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
  // return (
    // {cartItems: state.cart.cartItems}
    
    // Now the cart-dropdown component is memoized, and is not re-rendered if the state changes are not related to the component.
    // {cartItems: selectCartItems(state)}
  // )
// }

export default withRouter(connect(mapStateToProps)(CartDropdown));

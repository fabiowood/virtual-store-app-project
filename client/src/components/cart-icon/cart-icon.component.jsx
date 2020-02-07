import React from 'react';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { setCartDropdownDisplay } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({setCartDropdownDisplay, iconCount }) => {
  return (
    <section className='cart-icon' onClick={setCartDropdownDisplay}>
      <ShoppingBagIcon className='shopping-icon' />
      <span className='item-count'>{iconCount}</span>
    </section>
  )
}

// The function below is called a 'Selector', which means that we are pulling an state and then extracting a piece of it.

// Whenever the cartItems state changes, it will be a new object. In this case, the reduce method will be called again, even if the state changes have nothing to do with what our component needs. So, we will re-render the cartIcon component and get the same output. This creates a performance issue, because we are rendering the component again and again without a real change inside of it.

// To avoid this, we can use a Reselect Library, that will store the iconCounter output and that will only pass props to our component, whenever it realizes that the new data will actually change the stored output. This concept is called Memoization.

// Memoization is a specific type of cache that returns a storaged value from a function, whenever this function is called with the same arguments. Basically, it will always return the cached value => remember the concept of pure functions.

// To install the Reselect Library => npm add reselect.

// Now the cart-icon component is memoized, and is not re-rendered if the state changes are not related to the component.

const mapStateToProps = createStructuredSelector ({
  iconCount: selectCartItemsCount
})
  // return (
  //   {
      // iconCount: state.cart.cartItems.reduce((quantitySum, cartItem) => {
      //   return (
      //     quantitySum += cartItem.quantity
      //   )
      // }, 0)
      // iconCount: selectCartItemsCount(state)
      // Now the cart-icon component is memoized, and is not re-rendered if the state changes are not related to the component.
  //   }
  // )
// }

const mapDispatchToProps = dispatch => ({
  setCartDropdownDisplay: () => dispatch(setCartDropdownDisplay())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((quantitySum, cartItem) => {
    return (
      quantitySum += cartItem.quantity
    )
  }, 0)
);

// if we call the selectCartItemsCount, there will be this flow:

// (i) go to selectCartItems function
// (ii) go to selectCart function
// (iii) get the selectCart function return =>  state.cart
// (iv) pass this return into the selectCartItems 
// (v) pass the selectCartItems return into the selectCartItemsCount function
// (vi) The itemCount result is then passed as props to the cart-icon component
// (vii) Now the cart-icon component is memoized, and is not re-rendered if the state changes are not related to the component.


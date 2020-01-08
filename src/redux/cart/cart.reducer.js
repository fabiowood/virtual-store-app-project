import { cartActionTypes } from './cart.action.types';
import { addItemToCart } from './cart.utilities';
import { removeItemFromCart } from './cart.utilities';
import { removeQuantityFromCart } from './cart.utilities';

// We need to set the initial state to Redux:

const INITIAL_STATE = {
  hiddenDropdown: true,
  cartItems: [],
}

// We need to set a function to change the state. It is necessary to have a default (or else) statement, because the reducer will receive many actions at first, no matter the type of action. That reducer will only generate a new object, in case the action.type is the one that this reducer has the control.

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.TOOGLE_CART_DISPLAY:
      return {
        ...currentState,
        hiddenDropdown: !currentState.hiddenDropdown
      }
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...currentState,
        // In the code below, we are simply defining that the cartItems array will remain with its elements, plus the action.payload, as a new item to the end of the array.
        cartItems: addItemToCart(currentState.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_QUANTITY_FROM_ITEM:
      return {
        ...currentState,
        cartItems: removeQuantityFromCart(currentState.cartItems, action.payload)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...currentState,
        cartItems: []
      }
    default:
      return currentState;
  }
}

export default cartReducer;
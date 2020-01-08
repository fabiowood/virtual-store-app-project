// In this file, we will configure the actions that will trigger the rootReducer. 

// The function below returns a action object, which will be dispatched later on to all the application Reducers! 

import { cartActionTypes } from './cart.action.types';

export const setCartDropdownDisplay = () => {
  return ({
    type: cartActionTypes.TOOGLE_CART_DISPLAY,
  })
};

export const addItem = (item) => {
  return ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
  })
};

export const removeItem = (item) => {
  return ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
  })
};

export const removeQuantityFromItem = (item) => {
  return ({
    type: cartActionTypes.REMOVE_QUANTITY_FROM_ITEM,
    payload: item
  })
}

export const clearCart = () => {
  return ({
    type: cartActionTypes.CLEAR_CART
  })
}


// In this file, we will configure the actions that will trigger the rootReducer. 

// The function below returns a action object, which will be dispatched later on to all the application Reducers! 

import { cartActionTypes } from './cart.action.types';

export const setCartDropdownDisplay = () => {
  return ({
    type: cartActionTypes.TOOGLE_CART_DISPLAY,
  })
};


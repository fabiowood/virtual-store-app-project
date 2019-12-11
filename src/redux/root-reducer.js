import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

// We need to import all the Reducers to the Root Reducer:

export default combineReducers({
  user: userReducer,
  cartDropdownDisplay: cartReducer,
  addToCart: cartReducer,
});


// We need to set the initial state to Redux:

import SHOP_DATA from './shop.data';
import { shopActionTypes } from './shop.action.types';


const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...currentState,
        collections: action.payload
      }
    default:
      return currentState;
  }
};

export default shopReducer;
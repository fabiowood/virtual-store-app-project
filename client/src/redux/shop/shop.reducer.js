// We need to set the initial state to Redux:

// import SHOP_DATA from './shop.data';
import { shopActionTypes } from './shop.action.types';

// This initial state will no longer be needed, because we configured an action to upload the shop reducer with the back-end data from firebase:
// const INITIAL_STATE = {
//   collections: SHOP_DATA
// };

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
};


const shopReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...currentState,
        isFetching: true
      }
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...currentState,
        isFetching: false,
        collections: action.payload
      }
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...currentState,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return currentState;
  }
};

export default shopReducer;
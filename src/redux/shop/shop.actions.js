// In this file, we will configure the actions that will trigger the shopReducer. 

// The function below returns a action object, which will be dispatched later on to all the application Reducers! 

import { shopActionTypes } from './shop.action.types';

export const updateCollections = collectionsMap => {
  return ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
  })
}


// In this file, we will configure the actions that will trigger the shopReducer. 

// The function below returns a action object, which will be dispatched later on to all the application Reducers! 

import { shopActionTypes } from './shop.action.types';
import { firestore, convertCollectionsFromSnapshotToMap } from '../../firebase/firebase.utilities';

export const fetchCollectionsStart = () => {
  return ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  })
}

export const fetchCollectionsSuccess = (collectionsMap) => {
  return ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  })
}

export const fetchCollectionsFailure = (errorMessage) => {
  return ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  })
}

export const fetchCollectionsStartAsync = () => {
  return (
    dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
      collectionRef.get()
      .then(async collectionSnapshot => {
      const collectionsMap = await convertCollectionsFromSnapshotToMap(collectionSnapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
  )
}


// ***** Not needed anymore, due to redux-thunk ***** //

// export const updateCollections = collectionsMap => {
//   return ({
//     type: shopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
//   })
// }


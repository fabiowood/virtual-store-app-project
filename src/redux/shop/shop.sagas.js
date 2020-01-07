import { /* takeEvery, */ takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsFromSnapshotToMap } from '../../firebase/firebase.utilities';
import { shopActionTypes } from './shop.action.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync () {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call (convertCollectionsFromSnapshotToMap, snapshot);
    yield put (fetchCollectionsSuccess(collectionsMap));
  }
  catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart () {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
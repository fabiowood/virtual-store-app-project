import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user-sagas';

// Root Saga allow to include an array of sagas, so that they all can be covered by the sagaMiddleware.run():

export default function* rootSaga() {
  yield all ([
    call(fetchCollectionsStart),
    call(userSagas),
  ]);
}

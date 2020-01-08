import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user-sagas';
import { cartSagas } from './cart/cart.sagas';

// Root Saga allow to include an array of sagas, so that they all can be covered by the sagaMiddleware.run():

export default function* rootSaga() {
  yield all ([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
}

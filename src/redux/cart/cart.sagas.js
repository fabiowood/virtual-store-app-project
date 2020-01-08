import { takeLatest, all, call, put } from 'redux-saga/effects';
import userActionTypes from '../user/user.action.types';
import { clearCart } from './cart.actions';

export function* clearCartAfterSignOut() {
  yield put(clearCart());
}

export function* clearCartStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartAfterSignOut);
}

export function* cartSagas() {
  yield all([
    call(clearCartStart)
  ])
}



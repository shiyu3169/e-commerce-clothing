import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/userTypes';
import { clearCart } from './cartAction';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

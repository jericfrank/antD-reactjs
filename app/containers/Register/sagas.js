import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';

import { postRequest } from 'utils/request';

import { REGISTER_SUBMIT } from './constants';

import { registerSubmit, registerSuccess, registerError } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield fork( takeLatest, REGISTER_SUBMIT, submit );
}

export function* submit({ payload }) {
  try {
    const response = yield call( postRequest,'/auth/register', payload );

    yield put( registerSuccess({ data: [payload], message: 'Success request' }) );
  } catch ( err ) {
    yield put( registerError( err.error ) );
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

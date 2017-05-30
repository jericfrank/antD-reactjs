import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { postRequest } from 'utils/request';
import { handleJwtToken } from 'utils/jwtToken';

import { LOGIN_SUBMIT } from './constants';

import { loginSuccess, loginError, loginToken } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield fork( takeLatest, LOGIN_SUBMIT, submit );
}

export function* submit({ payload }) {
  try {
    const response = yield call( postRequest,'/auth/login', payload );

    yield call( handleJwtToken, response );
    yield put( loginToken( response ) );
    yield put( loginSuccess({ data: response, message: 'Success request' }) );
    yield put( push( '/' ) );
  } catch ( err ) {
    yield put( loginError( err.error ) );
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

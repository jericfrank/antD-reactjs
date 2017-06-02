import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { expireJwtToken } from 'utils/jwtToken';

import { LOGOUT_SUBMIT } from './constants';

import { appLogoutToken } from 'containers/App/actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield fork( takeLatest, LOGOUT_SUBMIT, submit );
}

export function* submit() {
  try {
    // const response = yield call( postRequest,'/auth/login', payload );
    expireJwtToken();

    yield put( appLogoutToken() );

    browserHistory.push( '/login' );
  } catch ( err ) {
    console.log( err );
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

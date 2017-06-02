import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { postRequest } from 'utils/request';

import { expireJwtToken } from 'utils/jwtToken';

import { LOGOUT_SUBMIT } from './constants';

import { appLogoutToken } from 'containers/App/actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield fork( takeLatest, LOGOUT_SUBMIT, submit );
}

export function* submit({ payload }) {
  try {
    const response = yield call( postRequest,'/auth/logout', payload );

    yield put( appLogoutToken() );

    browserHistory.push( '/login' );

    expireJwtToken();
  } catch ( err ) {
    console.log( err );
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

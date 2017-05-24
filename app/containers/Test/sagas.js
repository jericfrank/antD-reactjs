import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';

import { RECORD_SUBMIT } from './constants';

import { recordSubmit, recordSuccess, recordError } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield fork( takeLatest, RECORD_SUBMIT, submit );
}

export function* submit({ payload }) {
  try {
    yield put( recordSuccess({ data: [payload], message: 'Success request' }) );
  } catch ( err ) {
    yield put( recordError( err ) );
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

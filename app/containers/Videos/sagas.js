import { take, call, put, select, takeLatest, fork, cancel } from 'redux-saga/effects';

import { getRequest } from 'utils/request';

import { LOAD_VIDEOS } from './constants';

import { loadVideosSuccess } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield takeLatest( LOAD_VIDEOS, loadVideos );
}

export function* loadVideos() {
  try {
    const response = yield call( getRequest, '/videos' );

    yield put( loadVideosSuccess(response) );
  } catch ( err ) {
    console.log( err );
    // yield put( registerError( err.error ) );
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];

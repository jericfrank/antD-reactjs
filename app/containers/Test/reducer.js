/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  RECORD_SUBMIT,
  RECORD_SUCCESS,
  RECORD_ERROR
} from './constants';

const initialState = fromJS( {
  loading : false,
  success : {},
  error   : {}
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case RECORD_SUBMIT:
      return state
        .set( 'error', '' )
        .set( 'loading', true );

    case RECORD_SUCCESS:
      return state
        .set( 'success', action.payload )
        .set( 'error', {} )
        .set( 'loading', false );

    case RECORD_ERROR:
      return state
        .set( 'error', action.payload )
        .set( 'loading', false );

    default:
      return state;
  }
}

export default testReducer;

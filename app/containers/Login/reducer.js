/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_SUBMIT,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from './constants';

const initialState = fromJS({
  loading : false,
  success : '',
  error   : ''
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case LOGIN_SUBMIT:
      return state
        .set( 'success', '' )
        .set( 'error', '' )
        .set( 'loading', true );

    case LOGIN_SUCCESS:
      return state
        .set( 'success', action.payload )
        .set( 'error', '' )
        .set( 'loading', false );

    case LOGIN_ERROR:
      return state
        .set( 'success', '' )
        .set( 'error', action.payload )
        .set( 'loading', false );

    default:
      return state;
  }
}

export default loginReducer;

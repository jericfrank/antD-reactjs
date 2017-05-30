/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_CLEAR
} from './constants';

const initialState = fromJS({
  loading : false,
  success : '',
  error   : ''
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case REGISTER_CLEAR:
      return state
        .set( 'error', '' )
        .set( 'success', '' )
        .set( 'loading', false );

    case REGISTER_SUBMIT:
      return state
        .set( 'success', '' )
        .set( 'error', '' )
        .set( 'loading', true );

    case REGISTER_SUCCESS:
      return state
        .set( 'error', '' )
        .set( 'success', action.payload )
        .set( 'loading', false );

    case REGISTER_ERROR:
      return state
        .set( 'error', action.payload )
        .set( 'success', '' )
        .set( 'loading', false );

    default:
      return state;
  }
}

export default registerReducer;

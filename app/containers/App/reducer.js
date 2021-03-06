/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  APP_AUTH_TOKEN,
  APP_AUTH_REMOVE_TOKEN
} from './constants';

const initialState = fromJS({
  currentUser : {},
  authenticated : false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case APP_AUTH_TOKEN:
      return state
        .set( 'currentUser', action.payload )
        .set( 'authenticated', true );

    case APP_AUTH_REMOVE_TOKEN:
      return state
        .set( 'currentUser', {} )
        .set( 'authenticated', false );

    default:
      return state;
  }
}

export default globalReducer;

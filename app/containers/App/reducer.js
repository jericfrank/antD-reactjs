/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  APP_AUTH_TOKEN
} from './constants';

const initialState = fromJS({
  auth : {}
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case APP_AUTH_TOKEN:
      return state
        .set( 'auth', action.payload );

    default:
      return state;
  }
}

export default globalReducer;

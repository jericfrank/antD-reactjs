/*
 *
 * Videos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_VIDEOS,
  LOAD_VIDEOS_SUCCESS,
  LOAD_VIDEOS_ERROR
} from './constants';

const initialState = fromJS({
  loading : false,
  error   : false,
  videos  : false
});

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_VIDEOS:
      return state
        .set( 'loading', true )
        .set( 'error', false );

    case LOAD_VIDEOS_SUCCESS:
      return state
        .set( 'videos', action.payload )
        .set( 'loading', false )
        .set( 'error', false )

    case LOAD_VIDEOS_ERROR:
      return state
        .set( 'error', action.error )
        .set( 'videos', false )
        .set( 'loading', false );

    default:
      return state;
  }
}

export default videosReducer;

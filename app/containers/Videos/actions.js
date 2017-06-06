/*
 *
 * Videos actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_VIDEOS,
  LOAD_VIDEOS_SUCCESS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadVideos() {
  return {
    type: LOAD_VIDEOS
  };
}

export function loadVideosSuccess( payload ) {
  return {
    type: LOAD_VIDEOS_SUCCESS,
    payload
  };
}

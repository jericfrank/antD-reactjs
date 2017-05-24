/*
 *
 * Test actions
 *
 */

import {
  DEFAULT_ACTION,
  RECORD_SUBMIT,
  RECORD_SUCCESS,
  RECORD_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function recordSubmit ( obj ) {
  return {
    type    : RECORD_SUBMIT,
    payload : obj
  }
}

export function recordSuccess ( success ) {
  return {
    type    : RECORD_SUCCESS,
    payload : success
  };
}

export function recordError ( error ) {
  return {
    type    : RECORD_ERROR,
    payload : error
  };
}

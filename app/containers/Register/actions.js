/*
 *
 * Register actions
 *
 */

import {
  DEFAULT_ACTION,
  REGISTER_CLEAR,
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function registerSubmit ( payload ) {
  return {
    type    : REGISTER_SUBMIT,
    payload
  }
}

export function registerSuccess ( payload ) {
  return {
    type    : REGISTER_SUCCESS,
    payload
  }
}

export function registerError ( payload ) {
  return {
    type    : REGISTER_ERROR,
    payload
  }
}

export function registerClear () {
  return {
    type    : REGISTER_CLEAR,
    payload : {}
  }
}

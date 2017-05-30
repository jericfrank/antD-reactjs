/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

import { AUTH_TOKEN } from 'containers/App/constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginSubmit ( payload ) {
  return {
    type: LOGIN_SUBMIT,
    payload
  };
}

export function loginSuccess ( payload ) {
  return {
    type    : LOGIN_SUCCESS,
    payload
  }
}

export function loginError ( payload ) {
  return {
    type    : LOGIN_ERROR,
    payload
  }
}

export function loginToken ( payload ) {
  return {
    type    : AUTH_TOKEN,
    payload
  }
}

/*
 *
 * Logout actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGOUT_SUBMIT
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function logoutSubmit () {
  return {
    type    : LOGOUT_SUBMIT
  }
}

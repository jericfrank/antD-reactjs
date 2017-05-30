/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  APP_AUTH_TOKEN
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function appLoginToken ( payload ) {
  return {
    type    : APP_AUTH_TOKEN,
    payload
  }
}

/*
 *
 * Login constants
 *
 */

export const DEFAULT_ACTION = 'app/Login/DEFAULT_ACTION';
export const LOGIN_SUBMIT   = 'app/Register/LOGIN_SUBMIT';
export const LOGIN_SUCCESS  = 'app/Register/LOGIN_SUCCESS';
export const LOGIN_ERROR    = 'app/Register/LOGIN_ERROR';

export const FIELDS = {
  UserName : {
    type        : 'text',
    label       : 'UserName',
    placeholder : 'UserName',
    rules       : [
      {
        required : true,
        message  : 'Please input your UserName!'
      }
    ],
    icon : 'user',
  },
  Password : {
    type        : 'password',
    label       : 'Password',
    placeholder : 'Password',
    rules       : [
      {
        required : true,
        message  : 'Please input your Password!'
      }
    ],
    icon : 'lock',
  },
  Remember : {
    type        : 'checkbox',
    label       : 'Remember me',
  }
}

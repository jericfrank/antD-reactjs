/*
 *
 * Register constants
 *
 */

export const DEFAULT_ACTION = 'app/Register/DEFAULT_ACTION';

export const FIELDS = {
  Email : {
    type        : 'text',
    label       : 'Email',
    placeholder : 'Email',
    rules       : [
      {
        required : true,
        message  : 'Please input your Email!'
      }
    ],
    icon : 'mail',
  },
  Birthdate : {
    type        : 'date',
    label       : 'Birthdate',
    placeholder : 'Birthdate',
    rules       : [
      {
        required : true,
        message  : 'Please input your Birthdate!'
      }
    ],
    icon : 'calendar',
  },
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
  Password : {//static
    type        : 'password',
    label       : 'Password',
    placeholder : 'Password',
    icon : 'lock',
  },
  Confirm : {//static
    type        : 'confirm',
    label       : 'Confirm Password',
    placeholder : 'Confirm Password',
    icon : 'unlock',
  }
}

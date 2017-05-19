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
    icon : 'user',
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
  Confirm : {
    type        : 'password',
    label       : 'Confirm Password',
    placeholder : 'Confirm Password',
    rules       : [
      {
        required : true,
        message  : 'Please input your Confirm Password!'
      }
    ],
    icon : 'lock',
  },
}

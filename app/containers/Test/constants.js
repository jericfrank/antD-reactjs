/*
 *
 * Test constants
 *
 */

export const DEFAULT_ACTION = 'app/Test/DEFAULT_ACTION';
export const RECORD_SUBMIT  = 'app/Test/RECORD_SUBMIT';
export const RECORD_SUCCESS = 'app/Test/RECORD_SUCCESS';
export const RECORD_ERROR   = 'app/Test/RECORD_ERROR';

export const FIELDS = {
  Email : {
    type        : 'text',
    label       : 'Email',
    placeholder : 'Email',
    rules       : [
      {
        required : true,
        message  : 'Please input your Email!'
      },
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      }
    ],
  },
  Address : {
    type        : 'text',
    label       : 'Address',
    placeholder : 'Address',
    rules       : [
      {
        required : true,
        message  : 'Please input your Address!'
      }
    ],
  },
  Title : {
    type        : 'text',
    label       : 'Title',
    placeholder : 'Title',
    rules       : [
      {
        required : true,
        message  : 'Please input your Title!'
      }
    ]
  },
  Agreement : {
    type        : 'checkbox',
    label       : 'I have read the agreement',
    placeholder : 'Agreement'
  },
  Submit : {
    type        : 'button',
    label       : 'Submit'
  }
}

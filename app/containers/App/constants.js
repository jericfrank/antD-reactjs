/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const DEFAULT_ACTION = 'app/App/DEFAULT_ACTION';
export const APP_AUTH_TOKEN = 'app/App/APP_AUTH_TOKEN';
export const APP_AUTH_REMOVE_TOKEN = 'app/App/APP_AUTH_REMOVE_TOKEN';

export const RouteLinks = [ {
  name  : 'Login',
  path  : '/login'
}, {
  name  : 'Register',
  path  : '/register'
} ];

export const MenuLinks = [ {
  name  : 'Home',
  path  : '/',
  icon  : 'home'
}, {
  name  : 'Test',
  path  : '/test',
  icon  : 'user'
}, {
  name  : 'Upload Video',
  path  : '/uploader',
  icon  : 'upload'
}, {
  name  : 'Logout',
  path  : '/logout',
  icon  : 'logout'
} ];

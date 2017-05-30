/**
*
* Middleware
*
*/

import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: ( state ) => {
    const { currentUser } = state.toJS().global;

    return currentUser;
  }, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

export default UserIsAuthenticated;

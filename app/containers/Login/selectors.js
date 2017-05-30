import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */
const makeSelectError = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.get( 'error' )
);

const makeSelectSuccess = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.get( 'success' )
);

/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLogin;
export {
  selectLoginDomain,
  makeSelectError,
  makeSelectSuccess
};

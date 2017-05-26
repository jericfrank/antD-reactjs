import { createSelector } from 'reselect';

/**
 * Direct selector to the register state domain
 */
const selectRegisterDomain = () => (state) => state.get('register');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.get( 'loading' )
);

const makeSelectSuccess = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.get( 'success' )
);

const makeSelectError = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.get( 'error' )
);

/**
 * Default selector used by Register
 */

const makeSelectRegister = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRegister;
export {
  selectRegisterDomain,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError
};

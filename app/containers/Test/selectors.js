import { createSelector } from 'reselect';

/**
 * Direct selector to the test state domain
 */
const selectTestDomain = () => (state) => state.get('test');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectTestDomain(),
  (substate) => substate.get( 'loading' )
);

const makeSelectSuccess = () => createSelector(
  selectTestDomain(),
  (substate) => substate.get( 'success' )
);

const makeSelectError = () => createSelector(
  selectTestDomain(),
  (substate) => substate.get( 'error' )
);

/**
 * Default selector used by Test
 */

const makeSelectTest = () => createSelector(
  selectTestDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTest;
export {
  selectTestDomain,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError
};

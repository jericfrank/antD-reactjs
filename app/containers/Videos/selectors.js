import { createSelector } from 'reselect';

/**
 * Direct selector to the videos state domain
 */
const selectVideosDomain = () => (state) => state.get('videos');

/**
 * Other specific selectors
 */
const makeSelectLoading = () => createSelector(
  selectVideosDomain(),
  (substate) => substate.get( 'loading' )
);

const makeSelectError = () => createSelector(
  selectVideosDomain(),
  (substate) => substate.get( 'error' )
);
/**
 * Default selector used by Videos
 */

const makeSelectVideos = () => createSelector(
  selectVideosDomain(),
  (substate) => substate.get( 'videos' )
);

export default makeSelectVideos;
export {
  selectVideosDomain,
  makeSelectVideos,
  makeSelectLoading,
  makeSelectError
};

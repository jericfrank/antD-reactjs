import { createSelector } from 'reselect';

/**
 * Direct selector to the uploader state domain
 */
const selectUploaderDomain = () => (state) => state.get('uploader');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Uploader
 */

const makeSelectUploader = () => createSelector(
  selectUploaderDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUploader;
export {
  selectUploaderDomain,
};


import { fromJS } from 'immutable';
import videosReducer from '../reducer';

describe('videosReducer', () => {
  it('returns the initial state', () => {
    expect(videosReducer(undefined, {})).toEqual(fromJS({}));
  });
});

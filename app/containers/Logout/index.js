/*
 *
 * Logout
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLogout from './selectors';
import { logoutSubmit } from './actions';

export class Logout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount () {
    this.props.logoutSubmit();
  }

  render() {
    return (
      <div>
        Please wait.. logging out..
      </div>
    );
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Logout: makeSelectLogout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logoutSubmit: () => dispatch( logoutSubmit() )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

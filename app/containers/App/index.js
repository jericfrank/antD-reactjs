/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectAuthenticated, makeSelectCurrentUser } from './selectors';

import Header from 'components/Header';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  renderHeader(){
    const { authenticated, currentUser } = this.props;

    if ( authenticated ) {
      return (
        <Header user={currentUser.user}/>
      );
    }

    return '';
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  authenticated: makeSelectAuthenticated()
});

export default connect(mapStateToProps, null)(App);


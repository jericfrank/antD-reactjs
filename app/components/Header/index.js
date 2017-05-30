/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, email, created_at } = this.props.user;

    console.log( this.props.user );

    return (
      <ul>
        <li>email: {email}</li>
        <li>name: {name}</li>
        <li>join date: {created_at}</li>
      </ul>
    );
  }
}

Header.propTypes = {
  user : React.PropTypes.object,
};

export default Header;

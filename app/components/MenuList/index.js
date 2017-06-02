/**
*
* Menu
*
*/

import _ from 'lodash';
import React from 'react';
import { browserHistory } from 'react-router';
// import styled from 'styled-components';
import { Menu, SubMenu, Icon } from 'antd';

class MenuList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      current: '/'
    };

    this.renderMenu = this.renderMenu.bind( this );
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick(e){
    this.setState({
      current: e.key,
    });

    browserHistory.push( e.key );
  }

  renderMenu( value, key ) {
    return (
      <Menu.Item key={value.path}>
        <span>
          <Icon type={value.icon} />
          <span className="nav-text">{value.name}</span>
        </span>
      </Menu.Item>
    );
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {
          _.map( this.props.links, ( value, key ) => this.renderMenu( value, key ))
        }
      </Menu>
    );
  }
}

Menu.propTypes = {
  links: React.PropTypes.object
};

export default MenuList;

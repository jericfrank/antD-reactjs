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

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import { Logo } from './css';

import { makeSelectAuthenticated, makeSelectCurrentUser } from './selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor() {
    super();

    this.renderLayout  = this.renderLayout.bind( this );
  }

  renderLayout(){
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <Logo>
            <div className="logo"/>
          </Logo>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 650 }}>
            {React.Children.toArray(this.props.children)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
  render() {
    const { authenticated } = this.props;

    return (
      <div>
        { ( authenticated ) ? this.renderLayout() : React.Children.toArray(this.props.children) }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  authenticated: makeSelectAuthenticated()
});

export default connect(mapStateToProps, null)(App);


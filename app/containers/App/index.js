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

import { Layout, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer } = Layout;

import withProgressBar from 'components/ProgressBar';
import MenuList from 'components/MenuList';

import { MenuLinks } from './constants';

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
        <Header style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
          <Logo>
            <div className="logo"/>
          </Logo>
          <MenuList links={MenuLinks}/>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 850 }}>
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

export default connect(mapStateToProps, null)( withProgressBar(App) );


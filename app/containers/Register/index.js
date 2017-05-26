/*
 *
 * Register
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import { makeSelectLoading, makeSelectSuccess, makeSelectError } from './selectors';
import { FIELDS } from './constants';
import { registerSubmit, registerClear } from './actions';

import { RouteLinks } from 'containers/App/constants'

import Field from 'components/Field';

import { Spin, Form, Button } from 'antd';

const FormItem = Form.Item;

import Logo from '../Login/logo.png';

import { Img, DivHeader, WrapperLoginForm, AuthBackground } from '../Login/css';

const login = _.find( RouteLinks, { name : 'Login'} );

export class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.renderField  = this.renderField.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  renderField(field, key) {
    return (
      <Field field={field} name={key} key={key} form={this.props.form} />
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.registerSubmit( values );
      }
    });
  }

  render() {
    const { loading, success } = this.props;

    return (
      <AuthBackground>
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'Description of Register' },
          ]}
        />
        <WrapperLoginForm>
          <Spin spinning={loading} tip="Loading...">
            <Form onSubmit={this.handleSubmit} className="register-form">
              <Img src={Logo} />
              <DivHeader>
                <span>SILKROAD - REGISTER</span>
              </DivHeader>
              { _.map( FIELDS, this.renderField )}
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Register
                </Button>
                Or <Link to={login.path}>
                  Login
                </Link>
              </FormItem>
            </Form>
          </Spin>
        </WrapperLoginForm>
      </AuthBackground>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading : makeSelectLoading(),
  success : makeSelectSuccess(),
  error   : makeSelectError()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    registerSubmit : ( payload ) => dispatch( registerSubmit( payload ) ),
    registerClear : () => dispatch( registerClear() )
  };
}

Register = Form.create()(Register);

export default connect(mapStateToProps, mapDispatchToProps)(Register);

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
import makeSelectRegister from './selectors';
import { FIELDS } from './constants';

import { RouteLinks } from 'containers/App/constants'

import Field from 'components/Fields';

import { Form, Button } from 'antd';

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
    const { getFieldDecorator } = this.props.form;

    return (
      <Field field={field} name={key} key={key} form={this.props.form} />
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    return (
      <AuthBackground>
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'Description of Register' },
          ]}
        />
        <WrapperLoginForm>
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
        </WrapperLoginForm>
      </AuthBackground>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

Register = Form.create()(Register);

export default connect(mapStateToProps, mapDispatchToProps)(Register);

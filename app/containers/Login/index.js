/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import makeSelectLogin from './selectors';
import { FIELDS } from './constants';

import Field from 'components/Fields';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

import { WrapperLoginForm, LoginBackground, DivHeader, Img } from './css';

import Logo from './logo.png';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.renderField  = this.renderField.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  renderField(field, key) {
    const { getFieldDecorator } = this.props.form;

    return (
      <Field field={field} name={key} key={key} form={this.props.form} />
    );
  }

  render() {
    return (
      <LoginBackground>
        <Helmet
          title="Login Dope"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <WrapperLoginForm>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Img src={Logo} />
            <DivHeader>
              <span>Guns Store</span>
            </DivHeader>
            { _.map( FIELDS, this.renderField )}
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <a href="">Register</a>
              <a className="login-form-forgot" href="">Forgot password</a>
            </FormItem>
          </Form>
        </WrapperLoginForm>
      </LoginBackground>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

Login = Form.create()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

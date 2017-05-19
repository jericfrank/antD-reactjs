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

import styled from 'styled-components';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

const WrapperLoginForm = styled.div`
  padding: 10px;

  .login-form {
    max-width: 300px;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
`;

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.renderField = this.renderField.bind( this );
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
      <FormItem key={key} >
        {getFieldDecorator( key, { rules : field.rules })(
          <Input prefix={<Icon type={field.icon} style={{ fontSize: 13 }} />} placeholder={field.placeholder} />
        )}
      </FormItem>
    );
  }

  render() {
    return (
      <div>
        <Helmet
          title="Login Dope"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <WrapperLoginForm>
          <Form onSubmit={this.handleSubmit} className="login-form">
            { _.map( FIELDS, this.renderField )}
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <a href="">Register now!</a>
              <a className="login-form-forgot" href="">Forgot password</a>
            </FormItem>
          </Form>
        </WrapperLoginForm>
      </div>
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

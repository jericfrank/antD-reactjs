/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import makeSelectLogin from './selectors';
import { FIELDS } from './constants';

import { RouteLinks } from 'containers/App/constants'

import Field from 'components/Field';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

import { WrapperLoginForm, AuthBackground, DivHeader, Img } from './css';

import Logo from './logo.png';

const register = _.find( RouteLinks, { name : 'Register'} );

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
      <AuthBackground>
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
              <span>SILKROAD - LOGIN</span>
            </DivHeader>
            { _.map( FIELDS, this.renderField )}
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <Link to={register.path}>
                Register
              </Link>
            </FormItem>
          </Form>
        </WrapperLoginForm>
      </AuthBackground>
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

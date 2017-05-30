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
import { makeSelectError } from './selectors';
import { FIELDS } from './constants';
import { loginSubmit } from './actions';

import { RouteLinks } from 'containers/App/constants'

import Field from 'components/Field';

import { Alert, Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

import { WrapperLoginForm, AuthBackground, DivHeader, Img } from './css';

import Logo from './logo.png';

const register = _.find( RouteLinks, { name : 'Register'} );

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.renderField  = this.renderField.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.renderAlert  = this.renderAlert.bind( this );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginSubmit( values );
      }
    });
  }

  renderField(field, key) {
    const { getFieldDecorator } = this.props.form;

    return (
      <Field field={field} name={key} key={key} form={this.props.form} />
    );
  }

  renderAlert() {
    let html = '';

    if ( this.props.error ) {
      html = (
        <Alert message={this.props.error} type="error" />
      );
    }

    return html;
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
            { this.renderAlert() }
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
  error: makeSelectError()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loginSubmit : ( payload ) => dispatch( loginSubmit( payload ) ),
  };
}

Login = Form.create()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

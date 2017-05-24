/**
*
* Fields
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Form, Icon, Input, Checkbox, DatePicker } from 'antd';

const FormItem = Form.Item;

const renderMethods = {
  text     : 'renderTextField',
  password : 'renderPasswordField',
  confirm  : 'renderConfirmField',
  checkbox : 'renderCheckBoxField',
  date     : 'renderDateField'
};

const style = {
  fontSize: 13
}

class Fields extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor ( props ) {
    super( props );

    this.renderTextField     = this.renderTextField.bind( this );
    this.renderCheckBoxField = this.renderCheckBoxField.bind( this );
    this.renderPasswordField = this.renderPasswordField.bind( this );
    this.renderConfirmField  = this.renderConfirmField.bind( this );
    this.renderDateField     = this.renderDateField.bind( this );

    this.checkConfirm         = this.checkConfirm.bind( this );
    this.checkPassword        = this.checkPassword.bind( this );
  }

  checkConfirm (rule, value, callback){
    const form = this.props.form;

    if (form.getFieldValue('Confirm')) {
      form.validateFields(['Confirm'], { force: true });
    }

    callback();
  }

  checkPassword(rule, value, callback){
    const form = this.props.form;

    if (value && value !== form.getFieldValue('Password')) {
      callback('Password mismatch!');
    } else {
      callback();
    }
  }

  renderDateField(form, field, name){
    return (
      <FormItem>
        {form.getFieldDecorator( name, {
          rules: field.rules
        })(
          <Input prefix={<Icon type={field.icon} style={{ style }} />} type={field.type} placeholder={field.placeholder} />
          // <DatePicker style={{ width: '100%' }} placeholder={field.placeholder} />
        )}
      </FormItem>
    );
  }

  renderCheckBoxField(form, field, name){
    return (
      <FormItem>
        {form.getFieldDecorator( name, {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>{field.label}</Checkbox>
        )}
      </FormItem>
    );
  }

  renderTextField(form, field, name){
    return (
      <FormItem>
        {form.getFieldDecorator( name, {
          rules: field.rules
        })(
          <Input prefix={<Icon type={field.icon} style={{ style }} />} type={field.type} placeholder={field.placeholder} />
        )}
      </FormItem>
    );
  }

  renderPasswordField(form, field, name){
    return (
      <FormItem>
        {form.getFieldDecorator( name, {
          rules: [
            {
              required : true,
              message  : 'Please input your Password!'
            },{
              validator: this.checkConfirm
            }
          ]
        })(
          <Input prefix={<Icon type={field.icon} style={{ style }} />} type="password" placeholder={field.placeholder}/>
        )}
      </FormItem>
    );
  }

  renderConfirmField(form, field, name){
    return (
      <FormItem>
        {form.getFieldDecorator( name, {
          rules: [
            {
              required : true,
              message  : 'Please input your Password Confirmation!'
            },{
              validator: this.checkPassword
            }
          ]
        })(
          <Input prefix={<Icon type={field.icon} style={{ style }} />} type="password" placeholder={field.placeholder}/>
        )}
      </FormItem>
    );
  }

  render() {
    const { form, field, name } = this.props;

    return (
      <div>
        {this[ renderMethods[ field.type ] ]( form, field, name )}
      </div>
    );
  }
}

Fields.propTypes = {
  form  : React.PropTypes.object,
  field : React.PropTypes.object,
  name  : React.PropTypes.string
};

export default Fields;

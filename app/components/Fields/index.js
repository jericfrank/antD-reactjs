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
  password : 'renderTextField',
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
  }

  renderDateField(form, field, name){
    return (
      <FormItem>
        {form.getFieldDecorator( name, {
          rules: field.rules
        })(
          <DatePicker style={{ width: '100%' }} placeholder={field.placeholder} />
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

};

export default Fields;

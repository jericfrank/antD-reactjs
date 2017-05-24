/**
*
* FieldLabel
*
*/

import _ from 'lodash';
import React from 'react';
// import styled from 'styled-components';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const renderMethods = {
  text     : 'renderTextField',
  password : 'renderPasswordField',
  confirm  : 'renderConfirmField',
  checkbox : 'renderCheckBoxField',
  date     : 'renderDateField',
  button   : 'renderButtonField'
};

class FormField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.renderTextField = this.renderTextField.bind( this );

    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.submit( values );
      }
    });
  }

  renderTextField( value, key, getFieldDecorator ){
    return (
      <FormItem
          {...formItemLayout}
          label={value.label}
          hasFeedback
        >
        {getFieldDecorator( key, {
          rules: value.rules,
        })(
          <Input />
        )}
      </FormItem>
    );
  }

  renderCheckBoxField( value, key, getFieldDecorator ) {
    return (
      <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator( key, {
          valuePropName: 'checked',
        })(
          <Checkbox>{value.label}</Checkbox>
        )}
      </FormItem>
    );
  }

  renderButtonField(value, key){
    return (
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" size="large">{value.label}</Button>
      </FormItem>
    );
  }

  render() {
    const { fields , form } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {
          _.map( fields, ( value, key ) => {
            return (
              <div key={key}>
                {this[ renderMethods[ value.type ] ]( value, key , form.getFieldDecorator )}
              </div>
            );
          })
        }
      </Form>
    );
  }
}

FormField.propTypes = {
  submit : React.PropTypes.func.isRequired,
  fields : React.PropTypes.object,
  form   : React.PropTypes.object
};

export default Form.create()(FormField);

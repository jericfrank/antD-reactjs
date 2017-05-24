/*
 *
 * Test
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectTest from './selectors';

import { Spin } from 'antd';

import { FIELDS } from './constants';
import Form from 'components/FormField';

export class Test extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind( this );

    this.state = {
      loading: false
    };
  }

  handleSubmit(values){
    console.log( values );
    this.setState({ loading: true });
  }

  render() {
    return (
      <div>
        <Helmet
          title="Test"
          meta={[
            { name: 'description', content: 'Description of Test' },
          ]}
        />
        <Spin spinning={this.state.loading} tip="Loading...">
          <Form fields={FIELDS} submit={this.handleSubmit}/>
        </Spin>
      </div>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Test: makeSelectTest(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)( Test );

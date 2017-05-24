/*
 *
 * Test
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  selectTestDomain,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError
} from './selectors';

import { Spin } from 'antd';

import { recordSubmit } from './actions';
import { FIELDS } from './constants';
import Form from 'components/FormField';

export class Test extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleSubmit(values){
    this.props.recordSubmit( values );
  }

  render() {
    const { loading } = this.props;

    console.log( this.props );

    return (
      <div>
        <Helmet
          title="Test"
          meta={[
            { name: 'description', content: 'Description of Test' },
          ]}
        />
        <Spin spinning={loading} tip="Loading...">
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
  loading : makeSelectLoading(),
  error   : makeSelectError(),
  success : makeSelectSuccess()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    recordSubmit : ( record ) => dispatch( recordSubmit( record ) )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)( Test );

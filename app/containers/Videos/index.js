/*
 *
 * Videos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadVideos } from './actions';
import { makeSelectLoading, makeSelectError, makeSelectVideos } from './selectors';

import VideoList from 'components/VideoList';
import { Row, Col, Card, Spin } from 'antd';
import { ColWrapper } from './css';

export class Videos extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
  }

  componentWillMount () {
    this.props.loadVideos();
  }

  renderLayout(){
    return (
      <VideoList videos={this.props.videos} loading={this.props.loading}/>
    );
  }

  render() {
    return (
      <Spin spinning={this.props.loading} tip="Loading...">
        { ( this.props.videos ) ? this.renderLayout() : '' }
      </Spin>
    );
  }
}

Videos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videos  : makeSelectVideos(),
  loading : makeSelectLoading(),
  error   : makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadVideos : () => dispatch( loadVideos() )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);

/**
*
* VideoList
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import { ColWrapper } from 'containers/Videos/css';

class VideoList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.renderList = this.renderList.bind(this);
  }

  renderList( value, key ) {
    const { file_path , extention } = value;
    const thumbNail = file_path.replace(extention,'jpg');

    const a = thumbNail.replace('/upload/','/upload/w_150,h_100/');

    return (
      <Col key={key} className="gutter-row" span={6}>
        <Card loading={this.props.loading} title={value.name}>
          <img alt="example" width="100%" src={a} />
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <ColWrapper>
        <div className="gutter-example">
          <Row gutter={16}>
            {_.map( this.props.videos, ( value, key ) => this.renderList( value, key ))}
          </Row>
        </div>
      </ColWrapper>
    );
  }
}

VideoList.propTypes = {
  videos : React.PropTypes.array
};

export default VideoList;

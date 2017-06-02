/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Card } from 'antd';

import { CardWrapper } from './css';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card loading title="Card title">
              Whatever content
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card title="Card title">
              Whatever content
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card loading title="Card title">
              Whatever content
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <iframe title="YouTube video player" className="youtube-player" type="text/html"
              width="100%" src="http://www.youtube.com/embed/W-Q7RMpINVo"
              frameBorder="0" allowFullScreen></iframe>
          </Col>
        </Row>
      </div>
    );
  }
}

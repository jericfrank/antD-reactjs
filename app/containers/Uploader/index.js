/*
 *
 * Uploader
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUploader from './selectors';

import { Upload, message, Button, Icon } from 'antd';

export class Uploader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.onChange = this.onChange.bind( this );
  }

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    const token = {
      authorization: `Bearer ${this.props.authData.token}`
    };

    return (
      <Upload
        name="file"
        action="/api/uploader"
        headers={token}
        onChange={this.onChange}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    );
  }
}

Uploader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Uploader: makeSelectUploader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);

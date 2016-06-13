import React from 'react';
import { connect } from 'react-redux';

import Component from './components';
import { setRedirect } from '../actions';

const mapStateToProps = null;

const mapActionCreators = {
  setRedirect: setRedirect
};

export default connect(mapStateToProps, mapActionCreators)(Component);

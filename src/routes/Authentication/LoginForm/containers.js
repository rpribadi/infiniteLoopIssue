import React from 'react';
import { connect } from 'react-redux';

import Component from './components';

import {
  getUsername,
  getPassword,
  getError
} from '../selectors';

import {
  setUsername,
  setPassword,
  fetchLogin
} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  username: getUsername(state),
  password: getPassword(state),
  error: getError(state)
});

const mapActionCreators = {
  setUsername: setUsername,
  setPassword: setPassword,
  submit: fetchLogin
};

export default connect(mapStateToProps, mapActionCreators)(Component);

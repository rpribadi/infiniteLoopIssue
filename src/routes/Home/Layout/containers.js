import React from 'react';
import { connect } from 'react-redux';

import Component from './components';
import {getSettings} from 'app/selectors';
import {goToModule} from 'app/actions';

const mapStateToProps = (state) => ({
  settings: getSettings(state)
});

const mapActionCreators = {
  goToModule: goToModule
};

export default connect(mapStateToProps, mapActionCreators)(Component);

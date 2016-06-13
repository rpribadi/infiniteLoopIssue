import React from 'react';
import { connect } from 'react-redux';

import Component from './components';
import {fetchInitialSettings} from '../actions';
import {getFirstLoadDone} from '../selectors';

const App = (store) => {
  const mapStateToProps = (state) => ({
    store: store,
    firstLoadDone: getFirstLoadDone(state)
  });

  const mapActionCreators = {
    fetchInitialSettings: fetchInitialSettings
  };

  return connect(mapStateToProps, mapActionCreators)(Component);
};


export default App ;

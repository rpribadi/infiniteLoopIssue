import React from 'react';
import { connect } from 'react-redux';

import Component from './components';
import {fetchInitialSettings, resetProductDetail, setActiveProduct, restartModule, resetSettings} from '../actions';
import {getProductDetail, getSimilarProductList} from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    similarProductList: getSimilarProductList(state),
    product: getProductDetail(state),
    productId: parseInt(ownProps.params.productId)
  }
};

const mapActionCreators = {
  fetchInitialSettings: fetchInitialSettings,
  restartModule: restartModule,
  resetProductDetail: resetProductDetail,
  setActiveProduct: setActiveProduct,
  resetSettings: resetSettings
};

export default connect(mapStateToProps, mapActionCreators)(Component);

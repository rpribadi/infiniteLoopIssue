import { push } from 'react-router-redux';

import {
  fetchDummyInitialSettings,
  fetchDummyProductDetail
} from './dummyData';
import {getActiveProduct} from './selectors';

export const FETCH_INITIAL_SETTINGS = 'PRODUCT_FETCH_INITIAL_SETTINGS';
export const RECEIVE_INITIAL_SETTINGS = 'PRODUCT_RECEIVE_INITIAL_SETTINGS';
export const RESET_SETTINGS = 'PRODUCT_RESET_SETTINGS';

export const FETCH_PRODUCT_DETAIL = 'PRODUCT_FETCH_PRODUCT_DETAIL';
export const RECEIVE_PRODUCT_DETAIL = 'PRODUCT_RECEIVE_PRODUCT_DETAIL';

export const SET_ACTIVE_PRODUCT = 'PRODUCT_SET_ACTIVE_PRODUCT';
export const RESET_PRODUCT_DETAIL = 'PRODUCT_RESET_PRODUCT_DETAIL';

let _fetchDummyInitialSettingsHandler = null;
let _fetchDummyProductDetailHandler = null;

const API_CONFIG = {
  [FETCH_INITIAL_SETTINGS]: (dispatch) => {
    clearTimeout(_fetchDummyInitialSettingsHandler);

    _fetchDummyInitialSettingsHandler = setTimeout(() => {
      const dummy = fetchDummyInitialSettings();
      dispatch(receiveInitialSettings(dummy.result));
    }, 1000);

    return _fetchDummyInitialSettingsHandler;
  },

  [FETCH_PRODUCT_DETAIL]: (dispatch, getState) => {
    const state = getState();

    clearTimeout(_fetchDummyProductDetailHandler);

    _fetchDummyProductDetailHandler = setTimeout(() => {
      const product = getActiveProduct(state);
      console.log('fetching', product);
      const dummy = fetchDummyProductDetail(product.id, product.name);
      console.log('fetched', dummy.result)
      dispatch(receiveProductDetail(dummy.result));
    }, 1000);

    return _fetchDummyProductDetailHandler;
  }
};


export function setActiveProduct(_id) {
  return (dispatch) => {
    const id = parseInt(_id);
    dispatch({
      type: SET_ACTIVE_PRODUCT,
      id: id
    });
  };
}

export function fetchInitialSettings() {
  return (dispatch, getState) => {

    return API_CONFIG[FETCH_INITIAL_SETTINGS](dispatch, getState);
  };
}

export function receiveInitialSettings(productList) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_INITIAL_SETTINGS,
      productList: productList
    });

    dispatch(fetchProductDetail());
  };
}

export function resetSettings() {
  return {
    type: RESET_SETTINGS
  };
}


export function fetchProductDetail() {
  return (dispatch, getState) => {
    return API_CONFIG[FETCH_PRODUCT_DETAIL](dispatch, getState);
  };
}

export function receiveProductDetail(productDetail) {
  return {
    type: RECEIVE_PRODUCT_DETAIL,
    productDetail: productDetail
  };
}

export function resetProductDetail() {
  return {
    type: RESET_PRODUCT_DETAIL
  };
}

export function restartModule(id) {
  return (dispatch) => {
    dispatch(push('/product/' + id));
    dispatch(resetSettings());
    dispatch(setActiveProduct(id));
    dispatch(fetchInitialSettings());
  };
}

import _ from 'lodash';

import {
  RECEIVE_INITIAL_SETTINGS,
  RECEIVE_PRODUCT_DETAIL,
  RESET_PRODUCT_DETAIL,
  SET_ACTIVE_PRODUCT,
  RESET_SETTINGS,
} from './actions';

const INITIAL_STATE = {
  activeProduct: null,
  productList: [],
  productDetail: {}
};


const ACTION_HANDLERS = {
  [RECEIVE_INITIAL_SETTINGS]: (state, action) => {
    return {
      ...state,
      productList: [...action.productList]
    };
  },

  [RESET_SETTINGS]: (state) => {
    return {
      ...INITIAL_STATE
    };
  },

  [RESET_PRODUCT_DETAIL]: (state) => {
    return {
      ...state,
      activeProduct: null,
      productDetail: {}
    };
  },

  [RECEIVE_PRODUCT_DETAIL]: (state, action) => {
    return {
      ...state,
      productDetail: action.productDetail
    };
  },

  [SET_ACTIVE_PRODUCT]: (state, action) => {
    return {
      ...state,
      activeProduct: action.id
    };
  }

};


export default function reducer(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

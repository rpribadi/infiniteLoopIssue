import request from 'superagent';
import _ from 'lodash';
import { push } from 'react-router-redux';
import {fetchDummyInitialSettings, fetchDummyNationWide} from './dummyData';

export const REQUEST_INITIAL_SETTINGS = 'APP_REQUEST_INITIAL_SETTINGS';
export const FETCH_INITIAL_SETTINGS = 'APP_FETCH_INITIAL_SETTINGS';
export const RECEIVE_INITIAL_SETTINGS = 'APP_RECEIVE_INITIAL_SETTINGS';


let _fetchDummyInitialSettingsHandler = null;

const API_CONFIG = {
  [FETCH_INITIAL_SETTINGS]: (dispatch) => {
    clearTimeout(_fetchDummyInitialSettingsHandler);
    _fetchDummyInitialSettingsHandler = setTimeout(() => {
      dispatch(receiveInitialSettings(fetchDummyInitialSettings().result));
    }, 1000);

    return _fetchDummyInitialSettingsHandler;
  }
};


export function fetchInitialSettings() {
  return (dispatch) => {
    dispatch(requestInitialSettings());

    return API_CONFIG[FETCH_INITIAL_SETTINGS](dispatch);
  };
}

export function requestInitialSettings() {
  return {
    type: REQUEST_INITIAL_SETTINGS
  };
}

export function receiveInitialSettings(settings) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_INITIAL_SETTINGS,
      settings: settings
    });
  };
}

export function goToModule(url) {
  return (dispatch) => {
    dispatch(push(url));
  };
}

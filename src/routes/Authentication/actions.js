import { push } from 'react-router-redux';

import { getCredentials } from './selectors';

export const FETCH_LOGIN = 'AUTHENTICATION_FETCH_LOGIN';
export const REQUEST_LOGIN = 'AUTHENTICATION_REQUEST_LOGIN';

export const FETCH_LOGOUT = 'AUTHENTICATION_FETCH_LOGOUT';
export const REQUEST_LOGOUT = 'AUTHENTICATION_REQUEST_LOGOUT';

export const SET_CREDENTIALS = 'AUTHENTICATION_SET_CREDENTIALS';
export const SET_USERNAME = 'AUTHENTICATION_SET_USERNAME';
export const SET_PASSWORD = 'AUTHENTICATION_SET_PASSWORD';

export const SET_LOGIN_ERROR = 'AUTHENTICATION_SET_LOGIN_ERROR';
export const SET_REDIRECT = 'AUTHENTICATION_SET_REDIRECT';

export const LOGIN_URL = '/authentication';

const API_CONFIG = {
  [FETCH_LOGIN]: (dispatch, getState) => {
    const state = getState();
    const credentials = getCredentials(state);

    const username = credentials.username;
    const password = credentials.password;
    const accessKey = 'apidev';

    if (username !== 'admin' || password !== 'admin') {
      return dispatch(receiveLogin({
        username: '',
        password: '',
        accessKey: null,
        error: 'Username and/or password didn\'t match. Please enter your correct credentials.'
      }));
    }

    return dispatch(receiveLogin({
      username: username,
      password: '',
      accessKey: accessKey
    }));

  },

  [FETCH_LOGOUT]: (dispatch, getState) => {
    return dispatch(receiveLogout({
      username: '',
      password: '',
      accessKey: null
    }));
  }
};


const validateLoginForm = (credentials) => {
  if (!credentials.username || !credentials.password) {
    return false;
  }
  return true;
};


export function setLoginError(error) {
  return {
    type: SET_LOGIN_ERROR,
    error: error
  };
}

export function fetchLogin() {
  return (dispatch, getState) => {
    const state = getState();
    const credentials = getCredentials(state);

    if (validateLoginForm(credentials)) {
      dispatch(requestLogin());

      return API_CONFIG[FETCH_LOGIN](dispatch, getState);
    }
    else {
      return dispatch(setLoginError('Username and/or Password is required. Please check your login form.'));
    }
  };
}

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

export function receiveLogin(data) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CREDENTIALS,
      password: '',
      ...data
    });

    dispatch(onLoginLogoutSuccess(getState().authentication.redirect));
  };
}


export function fetchLogout() {
  return (dispatch, getState) => {
    dispatch(requestLogout());

    return API_CONFIG[FETCH_LOGOUT](dispatch, getState);
  };
}

export function requestLogout() {
  return {
    type: REQUEST_LOGOUT
  };
}

export function receiveLogout(credentials) {
  return (dispatch) => {
    dispatch({
      type: SET_CREDENTIALS,
      ...credentials
    });

    dispatch(onLoginLogoutSuccess());
  };
}

export function setUsername(username) {
  return (dispatch) => {
    dispatch({
      type: SET_USERNAME,
      username: username
    });
  };
}

export function setPassword(password) {
  return (dispatch) => {
    dispatch({
      type: SET_PASSWORD,
      password: password
    });
  };
}

export function setRedirect(url) {
  return (dispatch) => {
    dispatch({
      type: SET_REDIRECT,
      redirect: url
    });
  };
}


export function onLoginLogoutSuccess(url) {
  return (dispatch) => {
    const theUrl = (typeof url !== 'undefined') ? url : LOGIN_URL;
    console.log("REDIRECT TO ", theUrl);
    dispatch(push(theUrl));
  };
}

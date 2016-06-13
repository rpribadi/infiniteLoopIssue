import {
  SET_CREDENTIALS,
  SET_USERNAME,
  SET_PASSWORD,
  SET_LOGIN_ERROR,
  SET_REDIRECT
} from './actions';

const INITIAL_STATE = {
  password: '',
  username: '',
  accessKey: null,
  error: null,
  redirect: null
};


const ACTION_HANDLERS = {
  [SET_CREDENTIALS]: (state, action) => {
    return {
      ...state,
      username: action.username,
      password: action.password,
      accessKey: action.accessKey,
      error: action.error
    };
  },

  [SET_USERNAME]: (state, action) => {
    return {
      ...state,
      username: action.username
    };
  },

  [SET_PASSWORD]: (state, action) => {
    return {
      ...state,
      password: action.password
    };
  },

  [SET_REDIRECT]: (state, action) => {
    return {
      ...state,
      redirect: action.redirect
    };
  },

  [SET_LOGIN_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
};


export default function reducer(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

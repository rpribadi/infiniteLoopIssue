import {
  REQUEST_INITIAL_SETTINGS,
  RECEIVE_INITIAL_SETTINGS,
} from './actions';


const initialState = {
  settings: [],
  fetching: false,
  firstLoadDone: false
};


const ACTION_HANDLERS = {
  [REQUEST_INITIAL_SETTINGS]: (state) => {
    return {
      ...state,
      fetching: true
    };
  },

  [RECEIVE_INITIAL_SETTINGS]: (state, action) => {
    return {
      ...state,
      settings: [...action.settings],
      fetching: false,
      firstLoadDone: true
    };
  }
};


export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

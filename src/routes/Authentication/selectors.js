import { createSelector } from 'reselect';

export const getUsername = (state) => state.authentication.username;
export const getPassword = (state) => state.authentication.password;
export const getAccessKey = (state) => state.authentication.accessKey;
export const getError = (state) => state.authentication.error;


export const getCredentials = createSelector([
  getUsername,
  getPassword,
  getAccessKey
],
(username, password, accessKey) => {
  return {
    username: username,
    password: password,
    accessKey: accessKey
  };
});



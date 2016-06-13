import { createSelector } from 'reselect';

export const getSettings = (state) => state.app.settings;
export const getFirstLoadDone = (state) => state.app.firstLoadDone;
export const getFetching = (state) => state.app.fetching;

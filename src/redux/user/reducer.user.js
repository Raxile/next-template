import { createReducer } from '@reduxjs/toolkit';
import { LOADING_KEYS, setLoading } from './action.user';

const initialState = {
  [LOADING_KEYS.LOGIN_LOADER]: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLoading, (state, { payload }) => {
    const { key, value } = payload;
    state[key] = value;
  });
});

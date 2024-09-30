import { createAction } from '@reduxjs/toolkit';

export const LOADING_KEYS = {
  LOGIN_LOADER: 'loginLoader',
};

export const setLoading = createAction('user/setLoading');

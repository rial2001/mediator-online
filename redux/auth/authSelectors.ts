import { createSelector } from 'reselect';

const authSelector = state => state.user;

export const userSelector = createSelector(authSelector, item => item.user);

export const userIdSelector = createSelector(
  authSelector,
  item => item.user?.id
);

export const errorSelector = createSelector(authSelector, item => item.errors);

export const isAuthSelector = createSelector(authSelector, item => item.isAuth);

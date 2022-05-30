import { createSelector } from 'reselect';

const errorSelector = state => state.error;

export const errorSelect = createSelector(errorSelector, item => item.errors);

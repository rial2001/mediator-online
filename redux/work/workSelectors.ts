import { createSelector } from 'reselect';

const workSelector = state => state.work;

const selectProp = (state, prop) => prop;

export const typeWorkSelector = createSelector(
  workSelector,
  selectProp,
  (work, type) => {
    if (!work) {
      return null;
    }

    return work[type];
  }
);

export const newDisputeSelector = createSelector(
  workSelector,
  item => item?.newDispute
);

export const newDisputeError = createSelector(
  workSelector,
  item => item?.errors
);

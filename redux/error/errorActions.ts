import { errorActionTypes } from '@redux/error/errorActionTypes';

export const errorActions = {
  clearError: () => ({
    type: errorActionTypes.CLEAR_ERROR,
  }),
  setError: (message, status) => ({
    payload: { message, status },
    type: errorActionTypes.SET_ERROR,
  }),
};

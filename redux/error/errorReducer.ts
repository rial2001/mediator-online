import { handleActions } from 'redux-actions';
import { errorActionTypes } from '@redux/error/errorActionTypes';

const initialState = {
  errors: null,
};

const errorReducer = handleActions(
  {
    [errorActionTypes.SET_ERROR]: (state, action) => ({
      ...state,
      errors: {
        errorCode: action.payload.status,
        errorMessage: action.payload.message,
      },
    }),
    [errorActionTypes.CLEAR_ERROR]: (state, action) => ({
      ...state,
      errors: null,
    }),
  },
  initialState
);

export default errorReducer;

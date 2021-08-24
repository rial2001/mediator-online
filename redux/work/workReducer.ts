import { handleActions } from 'redux-actions';

import { workActionTypes } from '@redux/work/workActionTypes';
import { authActionTypes } from '@redux/auth/authActionTypes';

const initialState = null;

const workReducer = handleActions(
  {
    [authActionTypes.REGISTRATION_SUCCESS]: (state, action) => ({
      ...state,
      finish: [],
      new: [],
      process: [],
    }),
    [workActionTypes.GET_WORK_SUCCESS]: (state, action) => action.payload,
    [authActionTypes.LOGOUT_SUCCESS]: (state, action) => null,
    [workActionTypes.OPEN_DISPUTE_SUCCESS]: (state, action) => ({
      ...state,
      newDispute: action.payload,
    }),
    [workActionTypes.ADD_DISPUTE_MEDIATOR]: (state, action) => ({
      ...state,
      newDispute: {
        ...state.newDispute,
        mediator: action.payload,
      },
    }),
    [workActionTypes.ADD_DISPUTE_SUCCESS]: (state, action) => ({
      ...state,
      errors: null,
      new: [action.payload, ...state.new],
      newDispute: null,
    }),
    [workActionTypes.REFUSE_DISPUTE_SUCCESS]: (state, action) => ({
      ...state,
      errors: null,
      newDispute: null,
    }),
    [workActionTypes.OPEN_DISPUTE_FAILURE]: (state, action) => ({
      ...state,
      errors: action.payload,
    }),
    [workActionTypes.CLOSE_DISPUTE]: (state, action) => ({
      ...state,
      finish: [{ ...action.payload, type: 'finish' }, ...state.finish],
      newDispute: null,
    }),
    [workActionTypes.CLEAR_NEW_DISPUTE]: (state, action) => ({
      ...state,
      newDispute: null,
    }),
  },
  initialState
);

export default workReducer;

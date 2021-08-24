import { handleActions } from 'redux-actions';

import { authActionTypes } from '@redux/auth/authActionTypes';
import { IUser } from '@models/users';
import { userActionTypes } from '@redux/auth/user/userActionTypes';

export interface IStateUser {
  errors: null | string;
  isAuth: boolean;
  token: string | null;
  user: IUser | null;
}

const initialState: IStateUser = {
  errors: null,
  isAuth: false,
  token: null,
  user: null,
};

const userReducer = handleActions(
  {
    [authActionTypes.AUTH_SUCCESS]: (state, action) => ({
      errors: null,
      isAuth: true,
      token: action.payload.token,
      user: action.payload.user,
    }),
    [authActionTypes.LOGOUT_SUCCESS]: (state, action) => ({
      ...state,
      errors: null,
      isAuth: false,
      token: null,
      user: null,
    }),
    [authActionTypes.AUTH_ERROR]: (state, action) => ({
      ...state,
      errors: action.payload,
    }),
    [authActionTypes.CLEAR_ERROR]: (state, action) => ({
      ...state,
      errors: null,
    }),
    [authActionTypes.REGISTRATION_SUCCESS]: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    }),
    [userActionTypes.CHANGE_USER_INFO_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  initialState
);

export default userReducer;

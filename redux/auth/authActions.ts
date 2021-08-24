import { Dispatch } from 'redux';
import Router from 'next/router';

import { authService } from '@services/authService';
import { authActionTypes } from '@redux/auth/authActionTypes';
import { workActions } from '@redux/work/workActions';
import { store } from '@redux/store';
import { errorActions } from '@redux/error/errorActions';
import { appRouters } from '@routers/appRouters';
import { IRegistrationUser, IUser } from '@models/users';

interface IUserRequest {
  email: string;
  password: string;
}

interface ICandidate {
  user: IUser;
  token: string;
}

export const authAction = {
  authError: (error: string) => ({
    payload: error,
    type: authActionTypes.AUTH_ERROR,
  }),
  clearError: () => ({
    type: authActionTypes.CLEAR_ERROR,
  }),
  confirmCode: (code: string, candidate: IRegistrationUser) => {
    return async (dispatch: Dispatch) => {
      try {
        const otp = localStorage.getItem('code');
        const response = await authService.confirmCode({
          code,
          otp,
          user: candidate,
        });

        if (response.data) {
          localStorage.removeItem('code');

          const { token, user }: ICandidate | any = store.getState().user;

          dispatch(authAction.loginSuccess({ token, user }));

          await Router.push(`${appRouters.account}/${user.id}`);
        }
      } catch (error) {
        dispatch(
          errorActions.setError(
            error.response.data.message,
            error.response.status
          )
        );
        await Router.push(`${appRouters.error}/${error.response.status}`);
      }
    };
  },
  login: (userRequest: IUserRequest) => async (dispatch: Dispatch<any>) => {
    const { email, password } = userRequest;

    try {
      const response = await authService.login(email, password);

      if (response.data.error) {
        dispatch(authAction.authError(response.data.error));
      }

      if (response.data.token) {
        const { token, user } = response.data;

        localStorage.setItem('jwt', token);

        dispatch(authAction.loginSuccess(response.data));

        await dispatch(workActions.getWork());
        await Router.push(`${appRouters.account}/${user.id}`);
      }
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },

  loginSuccess: (user: ICandidate) => ({
    payload: user,
    type: authActionTypes.AUTH_SUCCESS,
  }),

  logout: () => async (dispatch: Dispatch) => {
    try {
      await authService.logout();
      dispatch(authAction.logoutSuccess());
      await localStorage.removeItem('jwt');
      await Router.push(appRouters.home);
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },

  logoutSuccess: () => ({
    type: authActionTypes.LOGOUT_SUCCESS,
  }),

  registration: (values: IRegistrationUser) => async dispatch => {
    try {
      const response = await authService.registration(values);

      if (response.data.user) {
        await dispatch(authAction.registrationSuccess(response.data));
        await localStorage.setItem('jwt', response.data.token);

        const codeResponse = await authService.sendCode(
          response.data.user.phone
        );

        if (codeResponse.data.code) {
          localStorage.setItem('code', codeResponse.data.code);
        }
      }
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
  registrationSuccess: (user: IUser) => ({
    payload: user,
    type: authActionTypes.REGISTRATION_SUCCESS,
  }),
  resendCode: (phone: string) => async dispatch => {
    try {
      const codeResponse = await authService.sendCode(phone);

      if (codeResponse.data.code) {
        localStorage.setItem('code', codeResponse.data.code);
        await alert('Sent the code');
      }
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
};

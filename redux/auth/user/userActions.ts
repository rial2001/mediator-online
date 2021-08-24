import { Dispatch } from 'redux';
import Router from 'next/router';

import { appRouters } from '@routers/appRouters';
import { errorActions } from '@redux/error/errorActions';
import { userService } from '@services/userService';
import { userActionTypes } from '@redux/auth/user/userActionTypes';
import { IUser } from '@models/users';

export const userActions = {
  changeUserInfo: modifiedInfo => async (dispatch: Dispatch) => {
    try {
      const response = await userService.modifyInfo(modifiedInfo);

      dispatch(userActions.changeUserInfoSuccess(response.data));
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
  changeUserInfoSuccess: (newInformation: IUser) => ({
    payload: newInformation,
    type: userActionTypes.CHANGE_USER_INFO_SUCCESS,
  }),
};

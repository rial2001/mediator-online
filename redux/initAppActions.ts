import { Dispatch } from 'redux';

import { authAction } from '@redux/auth/authActions';
import { initAppService } from '@services/initAppService';
import { workActions } from '@redux/work/workActions';

export const initAppActions = {
  initApp: () => async (dispatch: Dispatch<any>) => {
    try {
      const user = await initAppService.authUser();

      if (user.data.error) {
        throw new Error('Not authorized');
      }

      if (user.data.token) {
        dispatch(authAction.loginSuccess(user.data));
        await dispatch(workActions.getWork());
      }
    } catch (e) {
      console.warn(e.message);
    }
  },
};

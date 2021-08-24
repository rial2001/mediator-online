import { combineReducers } from 'redux';

import userReducer from '@redux/auth/userReducer';
import workReducer from '@redux/work/workReducer';
import errorReducer from '@redux/error/errorReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  user: userReducer,
  work: workReducer,
});

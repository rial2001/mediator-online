import { combineReducers } from 'redux';

//import userReducer from '@redux/auth/userReducer';
//import workReducer from '@redux/work/workReducer';
//import errorReducer from '@redux/error/errorReducer';
import {reducer as user} from '@redux/user'

export const rootReducer = combineReducers({user});

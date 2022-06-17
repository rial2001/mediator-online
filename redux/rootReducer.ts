import { combineReducers } from 'redux';

import {reducer as user} from '@redux/user'
import {reducer as dispute} from '@redux/dispute'
import {reducer as disputes} from '@redux/disputes'
import {reducer as mediators} from '@redux/mediators'

export const rootReducer = combineReducers({user, dispute, disputes, mediators});

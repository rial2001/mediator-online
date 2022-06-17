import {handleActions} from 'redux-actions'

import {userService} from '@services/user'
import {IMediator} from '@models/users'

enum Action {
  SET = 'SET_MEDIATORS',
  BEGIN = 'BEGIN_MEDIATORS',
  ERROR = 'ERROR_MEDIATORS'
}

export const set = (mediators: Array<IMediator>) => ({payload: mediators, type: Action.SET})
export const begin = () => ({type: Action.BEGIN})
export const error = err => ({payload: err, type: Action.ERROR})

export const load = () => async dispatch => {
  try {
    const mediators = await userService.getMediators()
    dispatch(set(mediators))
  } catch (err) {
    dispatch(error(err))
  }
}

export interface IMediatorsState {
  mediators: Array<IMediator>;
  loading: boolean;
  error?: string;
}

export const reducer = handleActions({
  [Action.SET]: (_, action) => ({error: null, loading: false, mediators: action.payload}),
  [Action.ERROR]: (state, action) => ({...state, error: action.payload, loading: false}),
  [Action.BEGIN]: (state, action) => ({...state, error: null, loading: true})
}, {error: null, loading: false, mediators: []})

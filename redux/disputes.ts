import {handleActions} from 'redux-actions'

import {disputeService} from '@services/dispute'
import {IDispute} from '@models/disputes'

enum Action {
  SET = 'SET_DISPUTES',
  BEGIN = 'BEGIN_DISPUTES',
  ERROR = 'ERROR_DISPUTES'
}

export const set = (disputes: Array<IDispute>) => ({payload: disputes, type: Action.SET})
export const begin = () => ({type: Action.BEGIN})
export const error = err => ({payload: err, type: Action.ERROR})

export const load = () => async dispatch => {
  try {
    const resultDisputes = await disputeService.getDisputes()
    dispatch(set(resultDisputes))
  } catch (err) {
    dispatch(error(err))
  }
}

export interface IDisputesState {
  disputes: Array<IDispute>;
  loading: boolean;
  error?: string;
}

export const reducer = handleActions({
  [Action.SET]: (_, action) => ({error: null, loading: false, disputes: action.payload}),
  [Action.ERROR]: (state, action) => ({...state, error: action.payload, loading: false}),
  [Action.BEGIN]: (state, action) => ({...state, error: null, loading: true})
}, {error: null, loading: false, disputes: []})

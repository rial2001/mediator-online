import {handleActions} from 'redux-actions'

import {disputeService} from '@services/dispute'
import {IDispute, ICreateDispute} from '@models/disputes'
import {load as load_disputes} from '@redux/disputes'

enum Action {
  SET = 'SET_DISPUTE',
  BEGIN = 'BEGIN_DISPUTE',
  ERROR = 'ERROR_DISPUTE'
}

export const set = (dispute: IDispute) => ({payload: dispute, type: Action.SET})
export const begin = () => ({type: Action.BEGIN})
export const error = err => ({payload: err, type: Action.ERROR})

export const create = (dispute: ICreateDispute) => async dispatch => {
  try {
    const resultDispute = await disputeService.create(dispute)
    dispatch(set(resultDispute))
    await dispatch(load_disputes())
  } catch (err) {
    dispatch(error(err))
  }
}

export interface IDisputeState {
  dispute?: IDispute;
  loading: boolean;
  error?: string;
}

export const reducer = handleActions({
  [Action.SET]: (_, action) => ({error: null, loading: false, dispute: action.payload}),
  [Action.ERROR]: (state, action) => ({...state, error: action.payload, loading: false}),
  [Action.BEGIN]: (state, action) => ({dispute: null, error: null, loading: true})
}, {error: null, loading: false, dispute: null})

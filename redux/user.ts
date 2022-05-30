import {Dispatch} from 'redux'
import {handleActions} from 'redux-actions'
import Router from 'next/router'

import {initAppService} from '@services/initAppService'
import {authService} from '@services/authService'
import {userService} from '@services/userService'
import {IUser, IRegistrationUser, ILogin, IUserUpdate} from '@models/users'
import {appRouters} from '@routers/appRouters'

enum Action {
  SET = 'SET_USER',
  BEGIN = 'BEGIN_USER',
  ERROR = 'ERROR_USER'
}

export const set = (user: IUser) => ({payload: user, type: Action.SET})
export const begin = () => ({type: Action.BEGIN})
export const error = err => ({payload: err, type: Action.ERROR})

export const load = () => async dispatch => {
  try {
    dispatch(begin())
    const user = await initAppService.authUser()
    dispatch(set(user))
    if(!user.phoneConfirmed)
      await Router.push(`${appRouters.registration}`)
  } catch (err) {
    dispatch(error({load: err}))
  }
}
export const registration = (values: IRegistrationUser) => async dispatch => {
  try {
    dispatch(begin())
    const user = await authService.registration(values)
    dispatch(set(user))
  } catch (err) {
    dispatch(error({registration: err}))
  }
}
export const login = (values: ILogin) => async dispatch => {
  const {email, password} = values
  try {
    dispatch(begin())
    const user = await authService.login(email, password)
    dispatch(set(user))
    await Router.push(`${appRouters.account}/${user.id}`)
  } catch {
    dispatch(error({login: 'user not exist'}))
  }
}
export const logout = () => async dispatch => {
  try {
    dispatch(begin())
    await authService.logout()
    dispatch(set(null))
    await Router.push(appRouters.home)
  } catch (err) {
    dispatch(error({logout: err}))
  }
}
export const update = (values: IUserUpdate) => async dispatch => {
  try {
    dispatch(begin())
    const user = await userService.modifyInfo(values)
    dispatch(set(user))
  } catch (err) {
    dispatch(error({update: err}))
  }
}
export const confirmCode = (code: string) => async dispatch => {
  try {
    dispatch(begin())
    const user = await authService.confirmCode(code)
    dispatch(set(user))
    await Router.push(`${appRouters.account}/${user.id}`)
  } catch (err) {
    dispatch(error({update: err}))
  }
}

export interface IUserState {
  user?: IUser;
  loading: boolean;
  error: object;
}

export const reducer = handleActions({
  [Action.SET]: (_, action) => ({error: {}, loading: false, user: action.payload}),
  [Action.ERROR]: (state, action) => ({...state, error: action.payload, loading: false}),
  [Action.BEGIN]: (state, action) => ({...state, error: {}, loading: true})
}, {error: {}, loading: false, user: null})
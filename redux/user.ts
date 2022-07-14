import {handleActions} from 'redux-actions'
import Router from 'next/router'

import {userService} from '@services/user'
import {IUser, IRegistrationUser, ILogin, IUserUpdate} from '@models/users'
import {appRouters} from '@routers/appRouters'
import {load as load_disputes} from '@redux/disputes'
import {load as load_mediators} from '@redux/mediators'

enum Action {
  SET = 'SET_USER',
  BEGIN = 'BEGIN_USER',
  ERROR = 'ERROR_USER'
}

export const set = (user: IUser | null) => ({payload: user, type: Action.SET})
export const begin = () => ({type: Action.BEGIN})
export const error = err => ({payload: err, type: Action.ERROR})

export const load = () => async dispatch => {
  try {
    dispatch(begin())
    const user = await userService.initUser()
    dispatch(set(user))
    await dispatch(load_disputes())
    await dispatch(load_mediators())
    if(!user.phoneConfirmed)
      await Router.push(`${appRouters.registration}`)
  } catch (err) {
    console.log('load', err)
    dispatch(error({load: err}))
  }
}
export const registration = (values: IRegistrationUser) => async dispatch => {
  try {
    dispatch(begin())
    const user = await userService.registration(values)
    await dispatch(load_disputes())
    await dispatch(load_mediators())
    dispatch(set(user))
  } catch (err) {
    dispatch(error({registration: err}))
  }
}
export const login = (values: ILogin) => async dispatch => {
  const {phone, password} = values
  try {
    dispatch(begin())
    const user = await userService.login(phone, password)
    dispatch(set(user))
    await dispatch(load_disputes())
    await dispatch(load_mediators())
    await Router.push(`${appRouters.account}/${user.id}`)
  } catch {
    dispatch(error({login: 'user not exist'}))
  }
}
export const logout = () => async dispatch => {
  try {
    dispatch(begin())
    await userService.logout()
    dispatch(set(null))
    await Router.push(appRouters.home)
  } catch (err) {
    dispatch(error({logout: err}))
  }
}
export const update = (values: IUserUpdate) => async dispatch => {
  try {
    dispatch(begin())
    const user = await userService.updateUser(values)
    dispatch(set(user))
  } catch (err) {
    dispatch(error({update: err}))
  }
}
export const confirmCode = (code: string) => async dispatch => {
  try {
    dispatch(begin())
    const user = await userService.confirmPhone(code)
    dispatch(set(user))
    await Router.push(`${appRouters.account}/${user.id}`)
  } catch (err) {
    dispatch(error({update: err}))
  }
}
export const changePassword = (password: string) => async dispatch => {
  try {
    dispatch(begin())
    await userService.changePassword(password)
  } catch (err) {
    dispatch(error({password: err}))
  }
}
export const loginByCode = (phone, code) => async dispatch => {
  try {
    dispatch(begin())
    const user = await userService.confirmLoginCode(phone, code)
    dispatch(set(user))
    await dispatch(load_disputes())
    await dispatch(load_mediators())
    await Router.push(`${appRouters.account}/${user.id}`)
  } catch {
    dispatch(error({login: 'user not exist'}))
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

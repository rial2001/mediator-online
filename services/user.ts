import axios from 'axios';

import { API_URL } from '@configs/default.json';
import {hnd} from './handler';

export const userService = {
  login: (phone, password) => axios.put(`${API_URL}/login`, {phone, password}).then(hnd),
  logout: () => axios.put(`${API_URL}/logout`).then(hnd),
  registration: user => axios.post(`${API_URL}/registration`, user).then(hnd),
  initUser: () => axios.put(`${API_URL}/init`).then(hnd),
  updateUser: user => axios.put(`${API_URL}/update`, user).then(hnd),
  changePassword: password => axios.put(`${API_URL}/change/password`, {password}).then(hnd),
  sendLoginCode: phone => axios.put(`${API_URL}/phone/login/send`, {phone}).then(hnd),
  confirmLoginCode: (phone, code) => axios.put(`${API_URL}/phone/login/confirm`, {phone, code}).then(hnd),
  confirmPhone: code => axios.put(`${API_URL}/phone/confirm`, {code}).then(hnd),
  sendPhoneCode: () => axios.put(`${API_URL}/phone/send`).then(hnd),
  confirmEmail: code => axios.put(`${API_URL}/email/confirm`, {code}).then(hnd),
  sendEmailCode: () => axios.put(`${API_URL}/email/send`).then(hnd),
  getMediators: () => axios.put(`${API_URL}/mediators`).then(hnd)
};

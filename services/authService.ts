import axios from 'axios';

import { API_URL } from '@configs/default.json';
import {hnd} from './handler';

export const authService = {
  confirmCode: code => axios.put(`${API_URL}/phone/confirm`, {code}).then(hnd),
  login: (email, password) => axios.put(`${API_URL}/login`, {email, password}).then(hnd),
  logout: () => axios.put(`${API_URL}/logout`).then(hnd),
  registration: user => axios.post(`${API_URL}/registration`, user).then(hnd),
  sendCode: () => axios.put(`${API_URL}/phone/send`).then(hnd)
};

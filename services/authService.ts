import axios from 'axios';

import { API_URL } from '@configs/default.json';

export const authService = {
  confirmCode: ({ code, otp, user }) =>
    axios.post(`${API_URL}/api/verify`, { code, otp, user }),

  login: (email, password) =>
    axios.post(`${API_URL}/api/login`, {
      email,
      password,
    }),

  logout: () => axios.post(`${API_URL}/api/logout`),

  registration: ({ email, firstName, lastName, username, phone, userType, password }) =>
    axios.post(`${API_URL}/auth/registration`, {email, firstName, lastName, username, phone, userType, password}),

  sendCode: phone =>
    axios.post(`${API_URL}/api/verifyCode/sendCode`, {
      phone,
    }),
};

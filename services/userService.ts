import axios from 'axios';

import { API_URL } from '@configs/default.json';
import {hnd} from './handler';

export const userService = {
  modifyInfo: user => axios.put(`${API_URL}/update`, user).then(hnd)
};

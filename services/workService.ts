import axios from 'axios';

import { API_URL } from '@configs/default.json';
import {hnd} from './handler';

export const workService = {
  getWorks: () => axios.put(`${API_URL}/works`),
  openDispute: dispute => axios.post(`${API_URL}/dispute`, dispute).then(hnd)
};

import axios from 'axios';

import { API_URL } from '@configs/default.json';
import {hnd} from './handler';

export const disputeService = {
  create: dispute => axios.post(`${API_URL}/dispute`, dispute).then(hnd),
  getDisputes: () => axios.put(`${API_URL}/disputes`).then(hnd)
};

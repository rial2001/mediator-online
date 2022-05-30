import axios from 'axios'

import {API_URL} from '@configs/default.json'
import {hnd} from './handler'

export const initAppService = {
  authUser: () => axios.put(`${API_URL}/init`).then(hnd)
}

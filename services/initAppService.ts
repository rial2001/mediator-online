import { privateRequestService } from '@services/privateRequestService';
import { API_URL } from '@configs/default.json';

export const initAppService = {
  authUser: () => privateRequestService.get(`${API_URL}/api/auth`),
};

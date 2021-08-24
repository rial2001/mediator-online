import { privateRequestService } from '@services/privateRequestService';
import { API_URL } from '@configs/default.json';

export const userService = {
  modifyInfo: (payload: { [K: string]: string }) =>
    privateRequestService.put(
      `${API_URL}/api/user/modify-information`,
      payload
    ),
};

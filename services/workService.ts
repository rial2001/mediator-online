import { privateRequestService } from '@services/privateRequestService';
import { API_URL } from '@configs/default.json';

export const workService = {
  getWorks: () => privateRequestService.get(`${API_URL}/api/work`),
  openDispute: payload =>
    privateRequestService.post(`${API_URL}/api/new-dispute`, payload),
};

import axios from 'axios';

export const privateRequestService = {
  get: (url: string) =>
    axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  post: (url: string, payload: unknown) =>
    axios.post(
      url,
      {
        payload,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      }
    ),
  put: (url: string, payload: unknown) =>
    axios.put(
      url,
      {
        payload,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      }
    ),
};

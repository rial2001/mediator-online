import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(200).json({ message: 'Logout' });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

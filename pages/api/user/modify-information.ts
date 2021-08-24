import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

import { db } from '@db-test/db-test';
import { SECRET_KEY } from '@configs/default.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { payload } = req.body;

    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      return res.json({ error: 'Auth error' });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    const { userId } = decoded;

    const user = db.collections.users[userId];

    if (!user) {
      return res.status(407).json({
        message:
          'Для доступа к странице сайта требуется авторизация на нем самом либо в прокси-сервере ',
      });
    }

    return res.json({ ...user, ...payload });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

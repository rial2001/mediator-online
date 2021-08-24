import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '@configs/default.json';
import { db } from '@db-test/db-test';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      return res
        .status(401)
        .json({
          message:
            'Для доступа к странице сайта требуется авторизация на нем самом',
        });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    const { userId } = decoded;

    const userWork = db.collections.works[userId];

    return res.status(200).json({ work: userWork });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

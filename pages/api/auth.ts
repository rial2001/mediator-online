import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '@configs/default.json';
import { db } from '@db-test/db-test';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      return res.json({ error: 'Auth error' });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    const { userId } = decoded;

    const user = db.collections.users[userId];

    if (!user) {
      return res.json({ error: 'User Not Found', status: 'error' });
    }

    return res.json({
      token,
      user,
    });
  } catch (e) {
    return res.json({ error: 'Auth error' });
  }
};

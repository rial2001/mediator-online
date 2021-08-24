import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@db-test/db-test';
import { SECRET_KEY } from '@configs/default.json';
import jwt from 'jsonwebtoken';

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

    const {
      category,
      date,
      description,
      geo,
      isEmail,
      isMediator,
      mediator,
      meetingForm,
      secondMember,
      time,
      type,
    } = payload;

    return res.json({
      category,
      chat: '/',
      date,
      description,
      geo,
      id: '4588855882',
      mediator: isMediator ? 'Выбор сервисом' : mediator,
      meetingForm,
      members: [
        { avatar: '/avatar.png', name: user.name },
        {
          avatar: '/avatar.png',
          name: isEmail ? 'E-mail не известен' : secondMember,
        },
      ],
      time,
      type: type || 'new',
      userId: userId || '98899898998',
    });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

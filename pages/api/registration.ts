import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

import { IUser, IRegistrationUser } from '@models/users';
import { db } from '@db-test/db-test';
import { SECRET_KEY } from '@configs/default.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, name, phone, userType }: IRegistrationUser = req.body;
    const newUser = Object.values(db.collections.users).find(
      someUser => someUser.email === email
    );

    if (newUser) {
      return res
        .status(400)
        .json({ message: `User with email ${email} already exist` });
    }

    const user: IUser = {
      address: 'Введите адрес',
      city: 'Введите город',
      email,
      id: '555555',
      name,
      password: '123456',
      phone,
      statusDispute: 'Оповещение через Email, PUSH',
      statusPay: 'Оповещение через Email, PUSH',
      support: 'Оповещение через Email, PUSH',
      timeZone: 'Введите часовой пояс',
      userType,
      wallet: '0.00руб',
    };

    const userId = user.id;
    const token = jwt.sign({ userId }, SECRET_KEY, {
      expiresIn: '7d',
    });

    return res.json({ token, user });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

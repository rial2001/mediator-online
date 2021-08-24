import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '@configs/default.json';
import { db } from '@db-test/db-test';
import { validationExpression } from '@validations/validationExpression';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    const isValidEmail = new RegExp(validationExpression.email).test(email);
    const isValidPassword = new RegExp(validationExpression.password).test(
      password
    );

    if (!isValidEmail || !isValidPassword || !email || !password) {
      return res.json({
        error: 'Не верный логин или пароль!',
        status: 'error',
      });
    }

    const user = Object.values(db.collections.users).find(
      someUser => someUser.email === email
    );

    if (!user) {
      return res.json({
        error: `Пользователь ${email} не зарегистрирован`,
        status: 'error',
      });
    }

    const userId = user.id;
    const token = jwt.sign({ userId }, SECRET_KEY, {
      expiresIn: '7d',
    });

    return res.status(200).json({
      token,
      user,
    });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

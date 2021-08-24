import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { code, otp, user } = req.body;

    if (!code) {
      return res.status(400).json({
        error: 'Request missing code',
        status: 'error',
      });
    }

    if (code !== otp) {
      return res.status(404).json({ error: 'Incorrect code', status: 'error' });
    }

    return res.json({ message: 'Registration success', user });
  } catch (e) {
    return res.status(500).json({ message: 'Ошибка запроса к серверу' });
  }
};

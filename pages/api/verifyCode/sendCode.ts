import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        error: 'Request missing phone',
        status: 'error',
      });
    }

    return res.json({ code: '123456' });
  } catch (e) {
    return res.send({ message: 'Server error' });
  }
};

import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const user = req.body;

      await client.createIfNotExists(user);

      return res.status(200).json('Logged in successfully!');
    default:
      return res.status(404).json('It no work...');
  }
}

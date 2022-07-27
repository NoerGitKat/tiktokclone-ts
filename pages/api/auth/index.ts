import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const user = req.body;

      try {
        await client.createIfNotExists(user);
      } catch (error) {
        console.error('Error! Could not create new user', error);
      }

      return res.status(200).json('Logged in successfully!');
    default:
      return res.status(500).json('It no work...');
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../interfaces';
import { allUsersQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const query = allUsersQuery();

      try {
        const users: IUser[] = await client.fetch(query);

        if (!users) return res.status(404).json('Could not find users!');
        return res.status(200).json(users);
      } catch (error) {
        return res.status(404).json(error);
      }

    default:
      return res.status(500).json('It no work...');
  }
}

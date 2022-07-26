import type { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../interfaces';
import { singleUserQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { id } = req.query;
      const query = id && singleUserQuery(id);

      try {
        const user: IUser[] | undefined | '' = query && (await client.fetch(query));

        if (!user) return res.status(404).json('Could not find user!');
        return res.status(200).json(user[0]);
      } catch (error) {
        return res.status(404).json(error);
      }

    default:
      return res.status(404).json('It no work...');
  }
}

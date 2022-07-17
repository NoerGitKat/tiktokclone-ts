import type { NextApiRequest, NextApiResponse } from 'next';
import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const query = allPostsQuery();
      const data = await client.fetch(query);

      return res.status(200).json(data);
    default:
      return res.status(404).json('It no work...');
  }
}

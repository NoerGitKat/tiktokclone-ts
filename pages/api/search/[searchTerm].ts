import type { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../interfaces';
import { searchPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { searchTerm } = req.query;
      const query = searchTerm && searchPostsQuery(searchTerm);

      try {
        const posts: IPost[] | undefined | '' = query && (await client.fetch(query));

        if (!posts) return res.status(404).json('Could not find anything!');
        return res.status(200).json({
          posts,
        });
      } catch (error) {
        return res.status(404).json(error);
      }

    default:
      return res.status(500).json('It no work...');
  }
}

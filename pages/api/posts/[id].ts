import type { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../interfaces';
import { postDetailQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { id } = req.query;
      const query = id && postDetailQuery(id);

      try {
        const post: IPost[] | undefined | '' = query && (await client.fetch(query));
        if (!post) return res.status(404).json('Could not find post!');
        return res.status(200).json(post[0]);
      } catch (error) {
        return res.status(404).json(error);
      }

    default:
      return res.status(500).json('It no work...');
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { INewPost } from '../../../interfaces';
import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const query = allPostsQuery();
      try {
        const data = await client.fetch(query);
        return res.status(200).json(data);
      } catch (error) {
        return res.status(404).json(error);
      }

    case 'POST':
      const newPost: INewPost = req.body;

      try {
        const data = await client.create(newPost);
        return res.status(201).json(data);
      } catch (error) {
        return res.status(409).json(error);
      }

    default:
      return res.status(404).json('It no work...');
  }
}

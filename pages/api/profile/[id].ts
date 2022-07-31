import type { NextApiRequest, NextApiResponse } from 'next';
import { IPost, IUser } from '../../../interfaces';
import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { id } = req.query;
      const query = id && singleUserQuery(id);
      const userVideosQuery = id && userCreatedPostsQuery(id);
      const userLikedVideosQuery = id && userLikedPostsQuery(id);

      try {
        const user: IUser[] | undefined | '' = query && (await client.fetch(query));
        const userVideos: '' | IPost | undefined =
          userVideosQuery && (await client.fetch(userVideosQuery));
        const userLikedVideos: '' | IPost | undefined =
          userLikedVideosQuery && (await client.fetch(userLikedVideosQuery));

        if (!user) return res.status(404).json('Could not find user!');
        return res.status(200).json({
          user: user[0],
          userVideos,
          userLikedVideos,
        });
      } catch (error) {
        return res.status(404).json(error);
      }

    default:
      return res.status(500).json('It no work...');
  }
}

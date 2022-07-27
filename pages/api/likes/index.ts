import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { client } from '../../../utils/sanity-client';

interface IPutLikeBody {
  userId: string;
  postId: string;
  like: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      const { userId, postId, like } = req.body as IPutLikeBody;
      try {
        const updatedPost = like
          ? await client
              .patch(postId)
              .setIfMissing({ likes: [] })
              .insert('after', 'likes[-1]', [{ _key: uuidv4(), _ref: userId }])
              .commit()
          : await client
              .patch(postId)
              .unset([`likes[_ref=="${userId}"]`])
              .commit();

        if (!updatedPost) return res.status(400).json('Could not update post!');

        return res.status(200).json(updatedPost);
      } catch (error) {
        return res.status(404).json(error);
      }

    default:
      return res.status(500).json('It no work...');
  }
}

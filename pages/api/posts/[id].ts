import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { IPost } from '../../../interfaces';
import { postDetailQuery } from '../../../utils/queries';
import { client } from '../../../utils/sanity-client';

interface IPutCommentBody {
  userId: string;
  comment: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  switch (req.method) {
    case 'GET':
      const query = id && postDetailQuery(id);

      try {
        const post: IPost[] | undefined | '' = query && (await client.fetch(query));
        if (!post) return res.status(404).json('Could not find post!');
        return res.status(200).json(post[0]);
      } catch (error) {
        return res.status(404).json(error);
      }

    case 'PUT':
      const { comment, userId } = req.body as IPutCommentBody;

      const newComment = {
        _key: uuidv4(),
        comment,
        postedBy: { _type: 'postedBy', _ref: userId },
      };

      try {
        const updatedPost =
          id &&
          typeof id === 'string' &&
          (await client
            .patch(id)
            .setIfMissing({ comments: [] })
            .insert('after', 'comments[-1]', [newComment])
            .commit());

        return res.status(201).json(updatedPost);
      } catch (error) {
        return res.status(422).json(error);
      }

    default:
      return res.status(500).json('It no work...');
  }
}

import { BiCommentX } from 'react-icons/bi';
import { IComment, IPost } from '../../../interfaces';
import EmptyState from '../../common/EmptyState';
import Comment from './Comment';
import CommentForm from './CommentForm';

export interface ICommentsProps {
  comments: IComment[];
  userId: string;
  post: IPost;
  updatePost: (updatedPost: IPost) => void;
}

export default function Comments({ comments = [], userId, post, updatePost }: ICommentsProps) {
  return (
    <section className="border-y-2 border-gray-200 mt-4 pt-4 px-10 bg-[#F8F8F8] lg:pb-0 pb-[100px] overflow-scroll lg:h-[475px]">
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <Comment key={comment._key} comment={comment} />
          ))}
        </ul>
      ) : (
        <EmptyState icon={<BiCommentX />} text="No comments yet" />
      )}
      <CommentForm userId={userId} post={post} updatePost={updatePost} />
    </section>
  );
}

import useComment from '../../../hooks/useComment';
import { IPost } from '../../../interfaces';

export interface ICommentFormProps {
  post: IPost;
  userId: string;
  updatePost: (updatedPost: IPost) => void;
}

export default function CommentForm({ post, userId, updatePost }: ICommentFormProps) {
  const { commentContent, createComment, setCommentState } = useComment(post, userId, updatePost);
  return (
    <form onSubmit={createComment} className="flex gap-4 mt-5">
      <input
        value={commentContent}
        onChange={setCommentState}
        className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
        placeholder="Add comment.."
      />
      <button
        type="submit"
        disabled={commentContent.length === 0}
        className={`text-md transition px-4 cursor-pointer rounded-full ${
          commentContent.length === 0 ? 'text-gray-400' : 'bg-slate-700 text-white'
        } hover:text-gray-200`}
      >
        {null ? 'Commenting...' : 'Comment'}
      </button>
    </form>
  );
}

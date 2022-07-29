import { MdFavorite } from 'react-icons/md';
import { useLike } from '../../hooks';
import { IPost } from '../../interfaces';

export interface ILikeButtonProps {
  userId: string;
  postId: string;
  currentPost: IPost;
  updateLikesInPost: (newLikes: any) => void;
}

export default function LikeButton({
  userId,
  postId,
  updateLikesInPost,
  currentPost,
}: ILikeButtonProps) {
  const { isAlreadyLiked, toggleLike } = useLike(currentPost, userId);

  console.log('currentPost', currentPost);

  return (
    <aside className="flex mt-4 flex-col justify-center items-center">
      <button
        className={`cursor-pointer bg-primary rounded-full p-2 md:p-4${
          isAlreadyLiked ? ' text-[#F51997] bg-slate-600' : ''
        }`}
        onClick={() => toggleLike(userId, postId, updateLikesInPost)}
      >
        <MdFavorite className="text-lg md:text-2xl" />
      </button>
      <span>{currentPost.likes?.length || 0}</span>
    </aside>
  );
}

import { useState } from 'react';
import { ILike, IPost } from '../interfaces';

const usePostDetails = (post: IPost) => {
  const [currentPost, setCurrentPost] = useState(post);

  // TODO: Add typing
  const updateLikesInPost = (newLikes: ILike[]) => {
    setCurrentPost((prevState) => ({ ...prevState, likes: newLikes }));
  };

  const updatePost = (updatedPost: IPost) => {
    setCurrentPost(updatedPost);
  };

  return { currentPost, updateLikesInPost, updatePost };
};

export default usePostDetails;

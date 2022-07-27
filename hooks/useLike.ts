import axios, { AxiosResponse } from 'axios';
import { useMemo, useState } from 'react';
import { IPost } from '../interfaces';
import { BASE_URL } from '../utils/constants';

const useLike = (currentPost: IPost, userId: string) => {
  const [isLiked, setIsLiked] = useState<boolean>(false); // TODO: Check if post is liked by logged in user

  const isAlreadyLiked = useMemo(
    () => currentPost.likes.some((like) => like._ref === userId),
    [currentPost],
  );

  const toggleLike = async (
    userId: string,
    postId: string,
    updateLikesInPost: (newLikes: any) => void,
  ) => {
    if (userId) {
      setIsLiked((prevState) => !prevState);

      const payload = {
        userId,
        postId,
        like: isLiked,
      };

      const newLikes: AxiosResponse<IPost, any> = await axios.put(`${BASE_URL}/likes`, payload);

      updateLikesInPost(newLikes.data.likes);
    }
  };

  return { isLiked, toggleLike, isAlreadyLiked };
};

export default useLike;

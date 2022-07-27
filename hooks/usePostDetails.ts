import { useState } from 'react';
import { IPost } from '../interfaces';

const usePostDetails = (post: IPost) => {
  const [currentPost, setCurrentPost] = useState(post);

  const updateLikesInPost = (newLikes) => {
    console.log('likes is', newLikes);
    setCurrentPost((prevState) => ({ ...prevState, likes: newLikes }));
  };

  return { currentPost, updateLikesInPost };
};

export default usePostDetails;

import { useEffect, useState } from 'react';
import { IPost } from '../interfaces';

const usePostDetails = (post: IPost) => {
  const [currentPost, setCurrentPost] = useState(post);

  useEffect(() => {}, []);

  return { currentPost };
};

export default usePostDetails;

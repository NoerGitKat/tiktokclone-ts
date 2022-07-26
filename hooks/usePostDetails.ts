import { useEffect, useRef, useState } from 'react';
import { IPost } from '../interfaces';

const usePostDetails = (post: IPost) => {
  const [currentPost, setCurrentPost] = useState(post);
  const postRef = useRef(null);

  useEffect(() => {}, []);

  return { currentPost, postRef };
};

export default usePostDetails;

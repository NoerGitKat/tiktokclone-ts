import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IPost } from '../interfaces';
import { BASE_URL } from '../utils/constants';

const useComment = (post: IPost, userId: string, updatePost: (updatedPost: IPost) => void) => {
  const [commentContent, setCommentContent] = useState<string>('');

  const createComment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      userId,
      comment: commentContent,
    };

    try {
      const { data } = await axios.put(`${BASE_URL}/posts/${post._id}`, payload);
      setCommentContent('');
      updatePost({ ...post, comments: data.comments });
    } catch (error) {
      console.error('Error! Could not create comment', error);
    }
  };

  const setCommentState = (e: ChangeEvent<HTMLInputElement>) => setCommentContent(e.target.value);

  const editComment = () => {};

  const deleteComment = () => {};

  return { createComment, commentContent, setCommentState };
};

export default useComment;

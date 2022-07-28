import { SanityAssetDocument } from '@sanity/client';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { INewPost, MediaTypes } from '../interfaces';
import useAuthStore from '../store/useStore';

import { BASE_URL, topics } from '../utils/constants';
import { client } from '../utils/sanity-client';

const useUpload = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [video, setVideo] = useState<SanityAssetDocument | undefined>(undefined);
  const [caption, setCaption] = useState<string>('');
  const [category, setCategory] = useState<string>(topics[0].name);

  const { userProfile } = useAuthStore();
  const { push } = useRouter();

  const previewVideo = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const selectedFile = event.target.files && event.target.files[0];
    const mediaTypes: string[] = Object.values(MediaTypes);
    if (selectedFile && mediaTypes.includes(selectedFile.type)) {
      const data = await client.assets.upload('file', selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name,
      });
      setVideo(data);
    } else {
      // TODO: Implement error handling
    }
    setIsUploading(false);
  };

  const discardVideo = () => setVideo(undefined);

  const uploadVideo = async () => {
    if (caption.length !== 0 && video?._id && category && userProfile) {
      const newPost: INewPost = {
        _type: 'post',
        caption,
        topic: category,
        video: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: video._id,
          },
        },
        userId: userProfile._id,
        postedBy: {
          _type: 'postedBy',
          _ref: userProfile._id,
        },
        likes: [],
        comments: [],
      };

      try {
        await axios.post(`${BASE_URL}/posts`, newPost);
      } catch (error) {
        console.error('Error! Could not upload video', error);
      }

      push('/');
    }
  };

  return {
    isUploading,
    previewVideo,
    video,
    caption,
    setCaption,
    category,
    setCategory,
    uploadVideo,
    discardVideo,
  };
};

export default useUpload;

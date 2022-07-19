import { SanityAssetDocument } from '@sanity/client';
import { ChangeEvent, useState } from 'react';
import { MediaTypes } from '../interfaces';
import { client } from '../utils/sanity-client';

const useUpload = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [video, setVideo] = useState<SanityAssetDocument | undefined>();

  const uploadVideo = async (event: ChangeEvent<HTMLInputElement>) => {
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

  return { isUploading, uploadVideo, video };
};

export default useUpload;

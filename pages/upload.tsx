import { NextPage } from 'next';
import { FaSpinner } from 'react-icons/fa';
import UploadBox from '../components/upload/UploadBox';
import VideoPreview from '../components/upload/VideoPreview';
import { useUpload } from '../hooks';

export interface IUploadPageProps {}

const UploadPage: NextPage<IUploadPageProps> = (props) => {
  const { isUploading, uploadVideo, video } = useUpload();

  return (
    <main className="flex w-full h-full flex-col">
      <header className="bg-white rounded-lg">
        <h1 className="text-2xl font-bold">Upload Video</h1>
        <h3 className="text-md text-gray-400">Post a video to your account</h3>
      </header>
      <section className="flex flex-col mr-[1.5rem] md:mr-0 md:flex-row">
        {isUploading ? (
          <FaSpinner className="animate-spin" color="F51997" />
        ) : (
          <UploadBox uploadVideo={uploadVideo} />
        )}
        {video && <VideoPreview video={video} />}
      </section>
    </main>
  );
};

export default UploadPage;

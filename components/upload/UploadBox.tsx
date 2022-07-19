import { ChangeEvent } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

export interface IUploadBoxProps {
  previewVideo: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export default function UploadBox({ previewVideo }: IUploadBoxProps) {
  return (
    <label className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-5 w-full md:w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
      <FaCloudUploadAlt className="text-gray-300 text-6xl" />
      <h3 className="text-l font-semibold">Upload Video</h3>
      <p className="text-gray-400 text-center mt-5 text-sm">MP4, WebM or OGG</p>
      <p className="text-gray-400 text-center mt-2 text-sm">720x1280 or higher</p>
      <p className="text-gray-400 text-center mt-2 text-sm">Up to 10 minutes</p>
      <p className="text-gray-400 text-center mt-2 text-sm">Less than 2GB per file</p>
      <input type="file" name="upload-video" onChange={previewVideo} hidden />
    </label>
  );
}

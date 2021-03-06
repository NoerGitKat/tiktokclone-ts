import { SanityAssetDocument } from '@sanity/client';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { topics } from '../../utils/constants';

export interface IVideoPreviewProps {
  video: SanityAssetDocument;
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  uploadVideo: () => void;
  discardVideo: () => void;
}

export default function VideoPreview({
  video,
  caption,
  setCaption,
  category,
  setCategory,
  uploadVideo,
  discardVideo,
}: IVideoPreviewProps) {
  return (
    <article className="w-full md:mx-10">
      <aside className="mb-4 md:w-full">
        <video
          src={video.url}
          loop
          controls
          className="block w-full rounded-xl h-[200px] mt-6 bg-black"
        />
      </aside>
      <aside className="flex flex-col gap-3">
        <label className="text-md font-medium">Caption</label>
        <input
          type="text"
          value={caption}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCaption(e.target.value)}
          className="rounded outline-none text-md border-2 border-gray-200 p-2"
        />
        <label className="text-md font-medium">Category</label>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          className="rounded outline-none text-md border-2 border-gray-200 p-2 cursor-pointer"
        >
          {topics.map((topic) => (
            <option key={topic.name}>{topic.name}</option>
          ))}
        </select>
      </aside>
      <aside className="flex gap-5 mt-7">
        <button
          onClick={discardVideo}
          type="button"
          className="border-2 border-gray-200 text-md font-medium p-2 rounded w-full"
        >
          Discard
        </button>
        <button
          onClick={uploadVideo}
          type="button"
          disabled={caption.length === 0}
          className="text-md text-white font-medium p-2 rounded w-full bg-[#F51997] disabled:opacity-50"
        >
          Upload
        </button>
      </aside>
    </article>
  );
}

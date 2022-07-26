import Image from 'next/image';
import Link from 'next/link';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi';
import { useVideo } from '../hooks';
import { IPost } from '../interfaces';

export interface IPostCardProps {
  post: IPost;
}

export default function PostCard({ post }: IPostCardProps) {
  const { videoRef, isHovered, isPlaying, isMuted, toggleHover, togglePlay, toggleAudio } =
    useVideo();

  return (
    <li className="flex flex-col border-b-2 border-gray-200 pb-6">
      <article className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
        <Link href={`/profile/${post.postedBy?._id}`}>
          <aside className="md:w-16 md:h-16 w-10 h-10">
            <Image
              width={62}
              height={62}
              className=" rounded-full"
              src={post.postedBy?.image}
              alt="User Profile"
              layout="responsive"
            />
          </aside>
        </Link>
        <aside>
          <Link href={`/posts/${post._id}`}>
            <aside className="flex items-center gap-2">
              <h3 className="flex gap-2 items-center md:text-md font-bold text-primary">
                {post.postedBy.userName} <GoVerified className="text-blue-400" />
              </h3>
              <h4 className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                {post.postedBy.userName}
              </h4>
            </aside>
          </Link>
          <article className="lg:ml-20 flex gap-4 relative">
            <aside
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              className="mt-4  rounded-3xl"
            >
              <video
                ref={videoRef}
                loop
                src={post.video.asset.url}
                className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
              ></video>

              {isHovered && (
                <aside className="absolute bottom-6 cursor-pointer left-11 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] lg:w-[600px] p-3">
                  <button onClick={togglePlay}>
                    {isPlaying ? (
                      <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
                    ) : (
                      <BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
                    )}
                  </button>
                  <button onClick={toggleAudio}>
                    {isMuted ? (
                      <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
                    ) : (
                      <HiVolumeUp className="text-black text-2xl lg:text-4xl" />
                    )}
                  </button>
                </aside>
              )}
            </aside>
          </article>
        </aside>
      </article>
    </li>
  );
}

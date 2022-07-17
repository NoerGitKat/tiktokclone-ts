import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { IPost } from '../interfaces';

export interface IPostCardProps {
  post: IPost;
}

export default function PostCard({ post }: IPostCardProps) {
  return (
    <li className="flex flex-col border-b-2 border-gray-200 pb-6">
      <aside className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
        <Link href={`/profile/${post.postedBy?._id}`}>
          <aside className="md:w-16 md:h-16 w-10 h-10">
            <Image
              width={62}
              height={62}
              className=" rounded-full"
              src={post.postedBy?.image}
              alt="user-profile"
              layout="responsive"
            />
          </aside>
        </Link>
        <Link href="/">
          <aside className="flex items-center gap-2">
            <h3 className="flex gap-2 items-center md:text-md font-bold text-primary">
              {post.postedBy.userName} <GoVerified className="text-blue-400" />
            </h3>
            <h4 className="capitalize font-medium text-xs text-gray-500 hidden md:block">
              {post.postedBy.userName}
            </h4>
          </aside>
        </Link>
      </aside>
    </li>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { IComment, IUser } from '../../../interfaces';

export interface ICommentProps {
  comment: IComment;
  user: IUser;
}

export default function Comment({ comment, user }: ICommentProps) {
  return (
    <li className="mb-4 flex flex-col gap-2">
      <Link href={`/profile/${user._id}`}>
        <a href="#" className="flex gap-2">
          <aside className="w-12 h-12">
            <Image
              width={35}
              height={35}
              className="rounded-full"
              src={user.image}
              alt="User Profile Picture"
              layout="responsive"
            />
          </aside>
          <h3 className="flex gap-1 items-center text-[18px] font-bold leading-6 text-primary">
            {user.userName} <GoVerified className="text-blue-400" />
          </h3>
        </a>
      </Link>
      <p>{comment.comment}</p>
    </li>
  );
}

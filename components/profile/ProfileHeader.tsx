import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import { IUser } from '../../interfaces';

export interface IProfileHeaderProps {
  user: IUser;
}

export default function ProfileHeader({ user }: IProfileHeaderProps) {
  return (
    <header className="flex gap-6 md:gap-6 mb-4 bg-white w-full pb-6 border-b-2">
      <aside className="w-16 h-16 md:w-32 md:h-32">
        <Image
          width={120}
          height={120}
          layout="responsive"
          className="rounded-full"
          src={user.image}
          alt="user-profile"
        />
      </aside>

      <aside className="text-md md:text-2xl font-bold tracking-wider flex gap-2 items-center justify-center">
        <span>{user.userName} </span>
        <GoVerified className="text-blue-400 md:text-xl text-md" />
      </aside>
    </header>
  );
}

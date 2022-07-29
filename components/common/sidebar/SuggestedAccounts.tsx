import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { useUsers } from '../../../hooks';

export interface ISuggestedAccountsProps {}

export default function SuggestedAccounts(props: ISuggestedAccountsProps) {
  const { allUsers } = useUsers();

  return (
    <article className="hidden xl:block xl:border-b-2 border-gray-200 pb-4">
      <h2 className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">Suggested Accounts</h2>
      {allUsers && allUsers.length > 0 && (
        <ul>
          {allUsers?.slice(0, 6).map((user) => (
            <Link key={user._id} href={`/profile/${user._id}`}>
              <li className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
                <aside className="w-8 h-8">
                  <Image
                    width={34}
                    height={34}
                    className="rounded-full"
                    src={user.image}
                    alt="User Profile Picture"
                    layout="responsive"
                  />
                </aside>
                <h3 className="flex gap-1 items-center">
                  {user.userName} <GoVerified className="text-blue-400" />
                </h3>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </article>
  );
}

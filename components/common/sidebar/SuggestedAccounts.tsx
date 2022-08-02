import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoVerified } from 'react-icons/go';
import { MdOutlineNoAccounts } from 'react-icons/md';
import { IUser } from '../../../interfaces';
import EmptyState from '../EmptyState';

export interface ISuggestedAccountsProps {
  accounts: IUser[];
}

export default function SuggestedAccounts({ accounts }: ISuggestedAccountsProps) {
  const { query } = useRouter();

  return accounts && accounts.length > 0 ? (
    <article className="hidden xl:block xl:border-b-2 border-gray-200 py-4">
      <ul>
        {accounts?.slice(0, 6).map((user) => (
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
    </article>
  ) : (
    <EmptyState icon={<MdOutlineNoAccounts />} text={`No accounts found for ${query.searchTerm}`} />
  );
}

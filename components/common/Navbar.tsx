import { googleLogout } from '@react-oauth/google';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import useAuthStore from '../../store/useStore';
import LoginButton from './LoginButton';
import SearchBar from './searchbar';

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  const logoutUser = () => {
    googleLogout();
    removeUser();
  };

  return (
    <nav className="w-full flex justify-between items-center border-b-2 border-gray-200 py-3 px-4">
      <Link href="/">
        <aside className="w-[100px]">
          <Image
            className="cursor-pointer"
            src={'/tiktok-logo.png'}
            alt="logo"
            layout="responsive"
            width={'100%'}
            height={35}
          />
        </aside>
      </Link>

      <SearchBar />

      <>
        {!userProfile ? (
          <LoginButton addUser={addUser} />
        ) : (
          <aside className="flex gap-5 md:gap-6">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" /> <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            <Link href="/">
              <aside className="w-10 h-10">
                <Image
                  width={62}
                  height={62}
                  className="cursor-pointer rounded-full"
                  src={userProfile.image}
                  alt="user-profile"
                  layout="responsive"
                />
              </aside>
            </Link>
            <button type="button" onClick={logoutUser}>
              <AiOutlineLogout color="red" fontSize="40" />
            </button>
          </aside>
        )}
      </>
    </nav>
  );
};

export default Navbar;

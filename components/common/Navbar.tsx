import Image from 'next/image';
import Link from 'next/link';
import { IoMdAdd } from 'react-icons/io';
import LoginButton from './LoginButton';

const Navbar = () => {
  const user = true;

  return (
    <nav className="w-full flex justify-between items-center border-b-2 border-gray-200 py-3 px-4">
      <Link href="/">
        <aside className="w-[100px] md:w-[129px] md:h-[30px] h-[38px]">
          <Image
            className="cursor-pointer"
            src={'/tiktik-logo.png'}
            alt="logo"
            layout="responsive"
            width={100}
            height={25}
          />
        </aside>
      </Link>

      <>
        {user ? (
          <>
            <aside className="flex gap-5 md:gap-10">
              <Link href="/upload">
                <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                  <IoMdAdd className="text-xl" /> <span className="hidden md:block">Upload</span>
                </button>
              </Link>
            </aside>
            <LoginButton />
          </>
        ) : null}
      </>
    </nav>
  );
};

export default Navbar;

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

const Navbar = () => {
  const router = useRouter();

  const user = false;

  return (
    <nav className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[129px] md:h-[30px] h-[38px]">
          <Image
            className="cursor-pointer"
            src={'/tiktik-logo.png'}
            alt="logo"
            layout="responsive"
            width={100}
            height={25}
          />
        </div>
      </Link>

      <>
        {user ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" /> <span className="hidden md:block">Upload</span>
              </button>
            </Link>

            <button
              type="button"
              className=" border-2 p-2 rounded-full cursor-pointer outline-none shadow-md"
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : null}
      </>
    </nav>
  );
};

export default Navbar;

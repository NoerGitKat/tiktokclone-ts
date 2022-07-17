import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

import Discover from './Discover';
import Footer from './Footer';

const Sidebar: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { pathname } = useRouter();

  // Temp
  const user = false;

  return (
    <section>
      <button
        className="block xl:hidden m-2 mt-3 text-xl"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        {isVisible ? <ImCancelCircle /> : <AiOutlineMenu />}
      </button>
      {isVisible && (
        <aside className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 ">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div
                className={`flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded${
                  pathname === '/' ? ' text-[#F51997]' : ''
                }`}
              >
                <span className="text-2xl">
                  <AiFillHome />
                </span>
                <span className="capitalize text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          <Discover />
          <Footer />
        </aside>
      )}
    </section>
  );
};

export default Sidebar;

import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../../../utils/constants';

const Discover: NextPage = () => {
  const router = useRouter();
  const { topic } = router.query;

  return (
    <article className="xl:border-b-2 xl:border-gray-200 pb-6">
      <h2 className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">Popular Topics</h2>
      <ul className="flex gap-3 flex-wrap justify-center">
        {topics?.map((top) => (
          <Link href={`/?topic=${top.name}`} key={top.name}>
            <li
              className={`xl:border-2 hover:bg-primary py-1 rounded xl:px-2 xl:rounded-full flex items-center gap-2 justify-center cursor-pointer ${
                top.name === topic
                  ? 'xl:border-[#F51997] text-[#F51997]'
                  : 'xl:border-gray-300 text-black'
              }`}
            >
              <span className="font-bold text-2xl xl:text-md ">{top.icon}</span>
              <span className="font-medium text-md hidden xl:block capitalize">{top.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
};

export default Discover;

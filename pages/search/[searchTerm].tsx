import axios from 'axios';
import { useRouter } from 'next/router';
import { BiCommentX } from 'react-icons/bi';
import EmptyState from '../../components/common/EmptyState';
import SuggestedAccounts from '../../components/common/sidebar/SuggestedAccounts';
import PostCard from '../../components/post';
import useSearch from '../../hooks/useSearch';
import { IPost } from '../../interfaces';
import { BASE_URL } from '../../utils/constants';

export interface ISearchTermPageProps {
  posts: IPost[];
}

export default function SearchTermPage({ posts }: ISearchTermPageProps) {
  const { showAccounts, setShowAccounts, foundAccounts } = useSearch(posts);
  const { query } = useRouter();

  return (
    <section>
      <h1 className="text-2xl">Search Results</h1>
      <ul className="flex gap-4 my-4">
        <li onClick={() => setShowAccounts(true)}>
          <button
            className={`${showAccounts ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}
            type="button"
          >
            Accounts {foundAccounts && `(${foundAccounts.length})`}
          </button>
        </li>
        <li onClick={() => setShowAccounts(false)}>
          <button
            className={`${!showAccounts ? 'border-b-2 border-black text-black' : 'text-gray-400'} `}
            type="button"
          >
            Videos {posts && `(${posts.length})`}
          </button>
        </li>
      </ul>

      {showAccounts && foundAccounts && <SuggestedAccounts accounts={foundAccounts} />}

      {!showAccounts && (
        <ul>
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <EmptyState icon={<BiCommentX />} text={`No videos found for ${query.searchTerm}`} />
          )}
        </ul>
      )}
    </section>
  );
}

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  try {
    // TODO: Add typing to data
    const { data } = await axios.get(`${BASE_URL}/search/${searchTerm}`);

    return {
      props: {
        posts: data.posts,
      },
    };
  } catch (error) {
    console.error('Server Error!', error);
    return {
      props: {},
    };
  }
};

import axios, { AxiosResponse } from 'axios';
import type { NextPage } from 'next';
import { MdOutlineVideocamOff } from 'react-icons/md';
import EmptyState from '../components/common/EmptyState';
import PostCard from '../components/post';
import { IPost } from '../interfaces';
import { BASE_URL } from '../utils/constants';

interface IHomeProps {
  posts: IPost[];
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <section>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </ul>
      ) : (
        <EmptyState icon={<MdOutlineVideocamOff />} text="No posts yet!" />
      )}
    </section>
  );
};

export const getServerSideProps = async ({ query: { topic } }: { query: { topic: string } }) => {
  try {
    const response: AxiosResponse<IPost[], null> = await axios.get(
      topic ? `${BASE_URL}/discover/${topic}` : `${BASE_URL}/posts`,
    );

    return {
      props: { posts: response.data },
    };
  } catch (error) {
    console.error('Error!', error);
    return 'Error!';
  }
};

export default Home;

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
      {posts.length > 0 ? (
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

export const getServerSideProps = async () => {
  try {
    const response: AxiosResponse<IPost[], null> = await axios.get(`${BASE_URL}/posts`);

    return {
      props: { posts: response.data },
    };
  } catch (error) {
    console.error('Error!', error);
    return 'Error!';
  }
};

export default Home;

import axios, { AxiosResponse } from 'axios';
import type { NextPage } from 'next';
import PostCard from '../components/post';
import { IPost } from '../interfaces';
import { BASE_URL } from '../utils/constants';

interface IHomeProps {
  posts: IPost[];
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <section>
      <ul>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </ul>
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

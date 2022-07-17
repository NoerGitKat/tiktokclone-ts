import axios, { AxiosResponse } from 'axios';
import type { NextPage } from 'next';

interface IPostsResponse {
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

interface IHomeProps {
  posts: IPostsResponse;
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  console.log('posts is', posts);
  return <h1 className="text-3xl font-bold underline">TikTok Clone</h1>;
};

export const getServerSideProps = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

  try {
    const response: AxiosResponse<IPostsResponse[], null> = await axios.get(`${BASE_URL}/posts`);

    console.log('response', response);

    return {
      props: { posts: response.data },
    };
  } catch (error) {
    return 'Error!';
  }
};

export default Home;

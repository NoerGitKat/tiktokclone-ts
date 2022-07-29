import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillPlayFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel, MdOutlineVideocamOff } from 'react-icons/md';
import EmptyState from '../../components/common/EmptyState';
import Comments from '../../components/post/comments';
import LikeButton from '../../components/post/LikeButton';
import { usePostDetails, useVideo } from '../../hooks';
import { IPost } from '../../interfaces';
import useAuthStore from '../../store/useStore';
import { BASE_URL } from '../../utils/constants';

export interface IPostDetailPageProps {
  post: IPost;
}

export default function PostDetailPage({ post }: IPostDetailPageProps) {
  const { userProfile, allUsers } = useAuthStore();
  const { currentPost, updateLikesInPost, updatePost } = usePostDetails(post);
  const { videoRef, togglePlay, isPlaying } = useVideo();
  const { back } = useRouter();

  if (!currentPost) return <EmptyState icon={<MdOutlineVideocamOff />} text="No post found!" />;

  return (
    <section className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
      <article className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center">
        <button
          className="opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 z-50 cursor-pointer "
          onClick={back}
        >
          <MdOutlineCancel className="text-white text-[35px] hover:opacity-90" />
        </button>

        <aside className="relative">
          <div className="lg:h-[100vh] h-[60vh]">
            <video
              ref={videoRef}
              onClick={togglePlay}
              loop
              src={currentPost?.video?.asset.url}
              className=" h-full cursor-pointer"
            />
          </div>

          <div className="absolute top-[45%] left-[45%] cursor-pointer">
            {!isPlaying && (
              <button onClick={togglePlay}>
                <BsFillPlayFill className="text-white text-6xl lg:text-8xl" />
              </button>
            )}
          </div>
        </aside>
      </article>
      <article className="relative min-w-[320px]">
        <aside className="flex gap-4 ml-4 mb-4 lg:mt-10 mt-5">
          <Link
            className="flex gap-4 mb-4 bg-white w-full pl-10 cursor-pointer"
            href={`/profile/${currentPost.postedBy._id}`}
          >
            <>
              <Image
                width={60}
                height={60}
                alt="user-profile"
                className="rounded-full"
                src={currentPost.postedBy.image}
              />
              <h1 className="text-xl font-bold lowercase tracking-wider flex gap-2 items-center justify-center">
                {currentPost.postedBy.userName.replace(/\s+/g, '')}{' '}
                <GoVerified className="text-blue-400 text-xl" />
              </h1>
            </>
          </Link>
        </aside>
        <aside>
          <h4 className="ml-4 text-md text-gray-600">{currentPost.caption}</h4>
          {userProfile && (
            <LikeButton
              postId={currentPost._id}
              userId={userProfile._id}
              updateLikesInPost={updateLikesInPost}
              currentPost={currentPost}
            />
          )}
          {userProfile && (
            <Comments
              post={currentPost}
              userId={userProfile._id}
              comments={currentPost.comments}
              updatePost={updatePost}
              allUsers={allUsers || []}
            />
          )}
        </aside>
      </article>
    </section>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query;

  if (id) {
    try {
      const { data }: { data: IPost } = await axios.get(`${BASE_URL}/posts/${id}`);
      return {
        props: {
          post: data,
        },
      };
    } catch (error) {
      console.error('Server Error!', error);
      return {
        props: {},
      };
    }
  }
};

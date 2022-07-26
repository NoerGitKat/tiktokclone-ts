import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { usePostDetails } from '../../hooks';
import { IPost } from '../../interfaces';
import { BASE_URL } from '../../utils/constants';

export interface IPostDetailPageProps {
  post: IPost;
}

export default function PostDetailPage({ post }: IPostDetailPageProps) {
  const { currentPost, postRef } = usePostDetails(post);
  const { back } = useRouter();

  if (!currentPost) return <section>No post found!</section>;

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
              ref={postRef}
              onClick={() => {}}
              loop
              src={currentPost?.video?.asset.url}
              className=" h-full cursor-pointer"
            />
          </div>

          <div className="absolute top-[45%] left-[40%] cursor-pointer">
            {/* {!isPlaying && (
              <button onClick={onVideoClick}>
                <BsFillPlayFill className="text-white text-6xl lg:text-8xl" />
              </button>
            )} */}
          </div>
        </aside>
        <aside className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10  cursor-pointer">
          {/* {isVideoMuted ? (
            <button onClick={() => setIsVideoMuted(false)}>
              <HiVolumeOff className="text-white text-3xl lg:text-4xl" />
            </button>
          ) : (
            <button onClick={() => setIsVideoMuted(true)}>
              <HiVolumeUp className="text-white text-3xl lg:text-4xl" />
            </button>
          )} */}
        </aside>
      </article>
      <article className="relative w-[1000px] md:w-[900px] lg:w-[700px]">
        <aside className="lg:mt-20 mt-10">
          <Link
            className="flex gap-4 mb-4 bg-white w-full pl-10 cursor-pointer"
            href={`/profile/${currentPost.postedBy._id}`}
          >
            <>
              {/* <Image
                width={60}
                height={60}
                alt="user-profile"
                className="rounded-full"
                src={currentPost.postedBy.image}
              /> */}
              <h1 className="text-xl font-bold lowercase tracking-wider flex gap-2 items-center justify-center">
                {currentPost.postedBy.userName.replace(/\s+/g, '')}{' '}
                <GoVerified className="text-blue-400 text-xl" />
              </h1>
              <h2 className="text-md"> {currentPost.postedBy.userName}</h2>
            </>
          </Link>

          <h4 className="px-10 text-md text-gray-600">{currentPost.caption}</h4>
          {/* {userProfile && (
              <LikeButton
                className="mt-10 px-10"
                likes={currentPost.likes}
                flex="flex"
                handleLike={() => handleLike(true)}
                handleDislike={() => handleLike(false)}
              />
            )} */}
          {/* <Comments
            comment={comment}
            setComment={setComment}
            addComment={addComment}
            comments={currentPost.comments}
            isPostingComment={isPostingComment}
          /> */}
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

import { useProfile } from '../../hooks';
import { IPost, IUser } from '../../interfaces';
import PostCard from '../post';

export interface IProfileBodyProps {
  user: IUser;
  userVideos: IPost[];
  userLikedVideos: IPost[];
}

export default function ProfileBody({ user, userVideos, userLikedVideos }: IProfileBodyProps) {
  const { showUserVideos, setShowUserVideos } = useProfile(user);

  const buttons = ['Videos', 'Liked'];

  return (
    <section className="">
      <article>
        <ul className="flex gap-4 mb-4">
          <li onClick={() => setShowUserVideos(true)}>
            <button
              className={` ${showUserVideos ? 'border-b-2 border-black' : 'text-gray-400'}`}
              type="button"
            >
              Own Videos
            </button>
          </li>
          <li onClick={() => setShowUserVideos(false)}>
            <button
              className={` ${!showUserVideos ? 'border-b-2 border-black' : 'text-gray-400'} `}
              type="button"
            >
              Liked Videos
            </button>
          </li>
        </ul>
      </article>

      <article>
        <ul>
          {showUserVideos
            ? userVideos.map((video) => <PostCard key={video._id} post={video} />)
            : userLikedVideos.map((video) => <PostCard key={video._id} post={video} />)}
        </ul>
      </article>
    </section>
  );
}

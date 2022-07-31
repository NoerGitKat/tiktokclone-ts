import axios from 'axios';
import { GetServerSidePropsContext, NextPage } from 'next';
import ProfileBody from '../../components/profile/ProfileBody';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { IProfile } from '../../interfaces';
import { BASE_URL } from '../../utils/constants';

export interface IProfilePageProps {
  profile: IProfile;
}

const ProfilePage: NextPage<IProfilePageProps> = ({ profile }) => {
  if (!profile) return null;
  return (
    <section className="flex w-full h-full flex-col">
      <ProfileHeader user={profile.user} />
      <ProfileBody
        user={profile.user}
        userVideos={profile.userVideos}
        userLikedVideos={profile.userLikedVideos}
      />
    </section>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  try {
    const { data: profile }: { data: IProfile } = await axios.get(`${BASE_URL}/profile/${id}`);

    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    console.error('Server Error!', error);
    return {
      props: {},
    };
  }
};

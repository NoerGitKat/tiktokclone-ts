import axios from 'axios';
import { GetServerSidePropsContext, NextPage } from 'next';
import { IUser } from '../../interfaces';
import { BASE_URL } from '../../utils/constants';

export interface IProfilePageProps {
  user: IUser;
}

const ProfilePage: NextPage<IProfilePageProps> = ({ user }) => {
  return (
    <section className="flex w-full h-full flex-col">
      <header className="bg-white rounded-lg">
        <h1 className="text-2xl font-bold">Your profile</h1>
      </header>
      <section className="flex flex-col mr-[1.5rem] md:mr-0 md:flex-row"></section>
    </section>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  try {
    const { data }: { data: IUser } = await axios.get(`${BASE_URL}/profile/${id}`);
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    console.error('Server Error!', error);
    return {
      props: {},
    };
  }
};

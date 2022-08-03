import axios, { AxiosResponse } from 'axios';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../interfaces';
import { BASE_URL } from '../utils/constants';

interface IAuthStore {
  userProfile: IUser | null;
  allUsers: IUser[] | null;
  addUser: (user: IUser) => void;
  removeUser: () => void;
  fetchAllUsers: () => void;
}

const store = (
  set: (arg0: { userProfile?: IUser | null; allUsers?: IUser[] }) => void,
): IAuthStore => ({
  userProfile: null,
  allUsers: [],
  addUser: (user: IUser) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const { data }: AxiosResponse<IUser[], any> = await axios.get(`${BASE_URL}/users`);
    set({ allUsers: data });
  },
});

const useAuthStore = create(
  persist(store, {
    name: 'auth',
  }),
);

export default useAuthStore;

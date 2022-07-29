import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../interfaces';

interface IAuthStore {
  userProfile: IUser | null;
  addUser: (user: IUser) => void;
  removeUser: () => void;
}

const store = (set: (arg0: { userProfile: IUser | null }) => void): IAuthStore => ({
  userProfile: null,
  addUser: (user: IUser) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
});

const useAuthStore = create(
  persist(store, {
    name: 'auth',
  }),
);

export default useAuthStore;

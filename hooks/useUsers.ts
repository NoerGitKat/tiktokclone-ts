import { useEffect } from 'react';
import useAuthStore from '../store/useStore';

const useUsers = () => {
  const { fetchAllUsers, allUsers } = useAuthStore();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return { allUsers };
};

export default useUsers;

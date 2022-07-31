import { useEffect, useState } from 'react';
import { IUser } from '../interfaces';

const useProfile = (user: IUser) => {
  const [showUserVideos, setShowUserVideos] = useState(true);

  useEffect(() => {
    setShowUserVideos(true);
  }, [user]);

  return { showUserVideos, setShowUserVideos };
};

export default useProfile;

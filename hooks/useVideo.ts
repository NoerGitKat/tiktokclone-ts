import { useEffect, useRef, useState } from 'react';

const useVideo = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleHover = () => {
    setIsHovered((prevState) => !prevState);
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    setIsMuted((prevState) => !prevState);
  };

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return { videoRef, isHovered, isPlaying, isMuted, toggleHover, togglePlay, toggleAudio };
};

export default useVideo;

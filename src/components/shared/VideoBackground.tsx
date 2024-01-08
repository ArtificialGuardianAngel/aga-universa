import { useEffect, useRef } from 'react';
import backgroundVideo from '../../assets/videos/universa-video-bg.mp4';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="top-0 left-0 w-screen h-[100dvh] -z-10 fixed"></div>
      <video
        ref={videoRef}
        className="top-0 left-0 w-screen h-[100dvh] -z-20 object-cover fixed opacity-50"
        loop
        muted
        controls={false}
        playsInline
      >
        <source src={backgroundVideo} />
      </video>
    </>
  );
};

export default VideoBackground;

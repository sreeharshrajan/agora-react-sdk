import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ isRemoteUser, videoTrack, userName, userType }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoTrack.play(videoRef.current);
    return () => {
      videoTrack.stop();
    };
  }, [videoTrack]);
  return (
    <div className={`relative w-full rounded-lg overflow-hidden  ${isRemoteUser ? 'col-span-2 h-full order-1 sm:order-none' : 'sm:h-[50%] h-[30vh]'}`}>
      <div
        ref={videoRef}
        id="video-container" className="w-full h-full"></div> {/* Video container */}
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white bg-black/50 px-2 py-1 rounded text-sm sm:text-base">
        {userName}
      </div>
    </div>
  );
};

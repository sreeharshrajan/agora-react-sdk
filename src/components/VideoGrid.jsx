import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { VideoPlaceholder } from './VideoPlaceholder';

export const VideoGrid = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [userIsConnected, setUserIsConnected] = useState(false);

  return (
    <div className="relative h-[calc(100vh-80px)] p-2 sm:p-4">
      <div className="h-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-4">
        {/* Local user's video */}
        <div className="relative w-full h-full">
          {isConnected ? (<VideoPlayer />) : (<VideoPlaceholder />)}
        </div>

        {/* Remote user's video */}
        <div className="relative w-full h-full">
          {userIsConnected ? (<VideoPlayer />) : (<VideoPlaceholder />)}
        </div>
      </div>
    </div>
  );
};
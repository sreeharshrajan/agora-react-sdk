import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { VideoPlaceholder } from './VideoPlaceholder';

export const VideoGrid = ({ localTracks, users }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [userIsConnected, setUserIsConnected] = useState(false);

  const remoteUser = users[0]; // Show only the first remote user

  return (
    <div className="relative h-[calc(100vh-80px)] p-2 sm:p-4">
      <div className="h-full w-full grid sm:grid-cols-3 grid-cols-1 gap-4">
        {/* Remote user's video */}
        {remoteUser?.videoTrack ? (
          <VideoPlayer
            videoTrack={remoteUser.videoTrack}
            userName={`User ${remoteUser.uid}`}
            isRemoteUser={true}
          />
        ) : (
          <VideoPlaceholder userName="Waiting for participant..." isRemoteUser={true} />
        )}

        {/* Local user's video */}
        {localTracks.videoTrack ? (
          <VideoPlayer isRemoteUser={false} videoTrack={localTracks.videoTrack} userName="You" />
        ) : (
          <VideoPlaceholder isRemoteUser={false} userName="You" />
        )}

      </div>
    </div>
  );
};
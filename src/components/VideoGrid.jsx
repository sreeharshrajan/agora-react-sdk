import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { VideoPlaceholder } from './VideoPlaceholder';

export const VideoGrid = ({ localTracks, users, userType }) => {
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
            userType={userType}
          />
        ) : (
            <VideoPlaceholder userName={`Waiting for ${userType === 'patient' ? 'doctor' : 'patient'} to join..`} isRemoteUser={true} userType={userType} />
        )}

        {/* Local user's video */}
        {localTracks.videoTrack ? (
          <VideoPlayer isRemoteUser={false} videoTrack={localTracks.videoTrack} userName="You" userType={userType} />
        ) : (
          <VideoPlaceholder isRemoteUser={false} userName="You" userType={userType} />
        )}

      </div>
    </div>
  );
};
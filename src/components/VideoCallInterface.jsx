import React from 'react';
import { VideoGrid } from './VideoGrid';
import { VideoControls } from './VideoControls';
import { useAgoraClient } from '../hooks/useAgoraClient';


export const VideoCallInterface = ({ agoraConfig }) => {
  const { localTracks, users, audioEnabled, videoEnabled, toggleAudio, toggleVideo, endCall } = useAgoraClient(agoraConfig);

  const handleEndCall = async () => {
    await endCall();
    onEndCall();
  };

  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
      <div className="flex-grow h-full">
        <VideoGrid localTracks={localTracks} users={users} />
      </div>
      <div className="h-20 flex items-center justify-center bg-black/80">
        <VideoControls audioEnabled={audioEnabled}
          videoEnabled={videoEnabled}
          onToggleAudio={toggleAudio}
          onToggleVideo={toggleVideo}
          onEndCall={handleEndCall}
        />
      </div>
    </div>
  );
};
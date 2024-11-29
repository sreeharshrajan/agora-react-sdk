import React from 'react';
import { VideoGrid } from './VideoGrid';
import { VideoControls } from './VideoControls';

export const VideoCallInterface = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
      <VideoGrid />
      <VideoControls />
    </div>
  );
};
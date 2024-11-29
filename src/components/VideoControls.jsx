import React from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';

export const VideoControls = () => {
  const [audioEnabled, setAudioEnabled] = React.useState(true);
  const [videoEnabled, setVideoEnabled] = React.useState(true);

  const onToggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  const onToggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  }

  const onEndCall = () => {
    
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gray-800 flex items-center justify-center gap-4 sm:gap-8 px-4">
      <button
        onClick={onToggleAudio}
        className={`p-3 sm:p-4 rounded-full transition-colors ${audioEnabled ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-600'
          }`}
      >
        {audioEnabled ? (
          <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <MicOff className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
      </button>
      <button
        onClick={onToggleVideo}
        className={`p-3 sm:p-4 rounded-full transition-colors ${videoEnabled ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-600'
          }`}
      >
        {videoEnabled ? (
          <Video className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <VideoOff className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
      </button>
      <button
        onClick={onEndCall}
        className="p-3 sm:p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
      >
        <PhoneOff className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div >
  );
};
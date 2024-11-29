import React, { useEffect, useRef } from 'react';

export const VideoPlayer = () => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800">
      <div id="video-container" className="w-full h-full"></div> {/* Video container */}
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white bg-black/50 px-2 py-1 rounded text-sm sm:text-base">
      </div>
    </div>
  );
};

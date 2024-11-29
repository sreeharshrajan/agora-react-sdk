import { useState } from 'react'
import { useAgoraParams } from './hooks/useAgoraParams';
import { VideoCallInterface } from './components/VideoCallInterface';

function App() {
  const config = useAgoraParams();
  return (
    <>
      <VideoCallInterface agoraConfig={config} />
    </>
  )
}

export default App

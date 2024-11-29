import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { createAgoraClient } from '../utils/agoraClient';

export const useAgoraClient = (config) => {
  const [client] = useState(createAgoraClient());
  const [localTracks, setLocalTracks] = useState({ audioTrack: null, videoTrack: null });
  const [users, setUsers] = useState([]);
  const [userType, setUserType] = useState([]);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  AgoraRTC.setLogLevel(4);

  useEffect(() => {
    const init = async () => {
      try {
        const { appId, channel, token, uid,type } = config;
        await client.join(appId, channel, token, uid);
        setUserType(type);
        const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
        setLocalTracks({ audioTrack, videoTrack });
        await client.publish([audioTrack, videoTrack]);
      } catch (error) {
        console.error("Error joining channel:", error);
      }
    };

    if (config) {
      init();
    }

    return () => {
      client.leave();
      localTracks.audioTrack?.close();
      localTracks.videoTrack?.close();
    };
  }, [config, client]);

  useEffect(() => {
    const handleUserPublished = async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      if (mediaType === "video") {
        setUsers(prevUsers => {
          if (prevUsers.find(u => u.uid === user.uid)) {
            return prevUsers;
          }
          return [...prevUsers, user];
        });
      }
      if (mediaType === "audio") {
        user.audioTrack?.play();
      }
    };

    const handleUserUnpublished = (user, mediaType) => {
      if (mediaType === "audio") {
        user.audioTrack?.stop();
      }
      if (mediaType === "video") {
        setUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
      }
    };

    const handleUserLeft = (user) => {
      setUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
    };

    client.on("user-published", handleUserPublished);
    client.on("user-unpublished", handleUserUnpublished);
    client.on("user-left", handleUserLeft);

    return () => {
      client.off("user-published", handleUserPublished);
      client.off("user-unpublished", handleUserUnpublished);
      client.off("user-left", handleUserLeft);
    };
  }, [client]);

  const toggleAudio = async () => {
    if (localTracks.audioTrack) {
      await localTracks.audioTrack.setEnabled(!audioEnabled);
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = async () => {
    if (localTracks.videoTrack) {
      await localTracks.videoTrack.setEnabled(!videoEnabled);
      setVideoEnabled(!videoEnabled);
    }
  };

  const endCall = async () => {
    localTracks.audioTrack?.close();
    localTracks.videoTrack?.close();
    await client.leave();
  };

  return {
    localTracks,
    users,
    audioEnabled,
    videoEnabled,
    toggleAudio,
    toggleVideo,
    endCall,
    userType
  };
};
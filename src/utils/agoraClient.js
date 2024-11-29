import AgoraRTC from 'agora-rtc-sdk-ng';

export const createAgoraClient = () => {
  AgoraRTC.setLogLevel(4);
  return AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
    role: "host"
  });
};
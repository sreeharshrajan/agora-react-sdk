import { useState, useEffect } from 'react';

export const useAgoraParams = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const appId = params.get('appId');
    const channel = params.get('channel');
    const token = params.get('token');
    const uid = params.get('uid');
    const type = params.get('type');

    if (appId && channel && uid) {
      setConfig({
        appId,
        channel,
        token,
        uid: parseInt(uid, 10),
        type
      });
    }
  }, []);

  return config;
};
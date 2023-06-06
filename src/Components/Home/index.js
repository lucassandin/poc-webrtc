import React, { useRef, useEffect, useState } from 'react';
import api from '../../services/api';
import './index.css';
import * as S from './style';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';


export default function Home() {
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);
  const [newSession, setNewSession] = useState(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = '47721481';
  const sessionId = process.env.SESSION_ID;
  // const token = 'T1==cGFydG5lcl9pZD00NzcyMTQ4MSZzaWc9MmZkZTNlYmU3YTJjZDNiYjE1MjJjOWM4ZDQ2NWI0NmM1MmZiZmUwYjpzZXNzaW9uX2lkPTJfTVg0ME56Y3lNVFE0TVg1LU1UWTROakF3TXpFd01EUTNNbjR2WWpkalRqSkhTbUpEVUZaMVFVRTVPRXR2YUVodFdXSi1mbjQmY3JlYXRlX3RpbWU9MTY4NjAwMzEwOSZub25jZT0wLjczNzA2NzExODQ5NTYzODgmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTY4NjAwNjcwOSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  const handleGetNewSession = async () => {
    try {
      const response = await api.get(`/session/create`)
      if (response.data)
        setNewSession(response.data)
    } catch (err) {
      console.log(err)
    } 
}

  useEffect(() => {
      handleGetNewSession()
  }, [])

  useEffect(() => {
    if (newSession == null) return;

    const OT = window.OT;
    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);

    // Set session and token for Web Components
    publisher.current.session = session;
    publisher.current.token = newSession.token;

    // subscribers.current.session = session; 
    // subscribers.current.token = newSession.token;
    // screenshare.current.session = session; 
    // screenshare.current.token = newSession.token;
  });

  useEffect(() => {
    if (newSession == null) return;

    const OT = window.OT;
    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);

    subscribers.current.session = session; 
    subscribers.current.token = newSession.token;
    screenshare.current.session = session; 
    screenshare.current.token = newSession.token;
  })

  return (
    <div className="App">
      <header className="App-header">
        <span>Header</span>
      </header>
      <S.Container>
        <S.SectionPublisher className="App-section-publisher">
          <fieldset>
            <legend>Publisher</legend>
            <video-publisher width="360px" height="240px" ref={publisher}></video-publisher>
          </fieldset>
          <button onClick={toggleVideo}>
              toggle Video
          </button>
          <button onClick={toggleAudio}>
              toggle Audio
          </button>
          <br/><br/>
          <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share>
        </S.SectionPublisher>
        <S.SectionSubscribers className="App-section-subscribers">
          <fieldset>
            <legend>Subscribers</legend>
            <video-subscribers width="360px" height="240px" ref={subscribers}></video-subscribers>
          </fieldset>
        </S.SectionSubscribers>
      </S.Container>
    </div>
  );
}

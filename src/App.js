import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

function App() {
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = '47721481';
  const sessionId = '1_MX40NzcyMTQ4MX5-MTY4NTk4ODIyOTcwM34rRU1kZ3dKOEl1Uy9QSVgzVkIyeThGYi9-fn4';
  const token = 'T1==cGFydG5lcl9pZD00NzcyMTQ4MSZzaWc9Y2FhMDViMjczZWM0ZThmMDk3MjcwNTA2ZmQ0ZmYwZmIyMWQyY2VlYTpzZXNzaW9uX2lkPTFfTVg0ME56Y3lNVFE0TVg1LU1UWTROVGs0T0RJeU9UY3dNMzRyUlUxa1ozZEtPRWwxVXk5UVNWZ3pWa0l5ZVRoR1lpOS1mbjQmY3JlYXRlX3RpbWU9MTY4NTk5MDg5OSZub25jZT0wLjExNTMxMDkxNzU3NjgwMjEyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2ODU5OTQ0OTgmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  useEffect(() => {
    const OT = window.OT;

    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);

    // Set session and token for Web Components
    publisher.current.session = session;
    publisher.current.token = token;
    subscribers.current.session = session;
    subscribers.current.token = token;
    screenshare.current.session = session;
    screenshare.current.token = token;

  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <section className="App-section-publisher">
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
        </section>
        <section className="App-section-subscribers">
          <fieldset>
            <legend>Subscribers</legend>
            <video-subscribers width="360px" height="240px" ref={subscribers}></video-subscribers>
          </fieldset>
        </section>
      </div>
    </div>
  );
}

export default App;

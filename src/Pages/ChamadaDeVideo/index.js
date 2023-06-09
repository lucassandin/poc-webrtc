import React, { useRef, useEffect } from 'react';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

export default function ChamadaDeVideo() {
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = '47721481';
  const sessionId = '1_MX40NzcyMTQ4MX5-MTY4NjMxNzcwMjgwOX5PZkhTaUo4QitzS0xaVllaU1lLbll4c3B-QX5-';
  const token = 'T1==cGFydG5lcl9pZD00NzcyMTQ4MSZzaWc9YWVlODAxYTYyMTJjOWJiNmIyMjBkMDIwNzI1ZWY5NTk0MWRjNTZmMzpzZXNzaW9uX2lkPTFfTVg0ME56Y3lNVFE0TVg1LU1UWTROak14Tnpjd01qZ3dPWDVQWmtoVGFVbzRRaXR6UzB4YVZsbGFVMWxMYmxsNGMzQi1RWDUtJmNyZWF0ZV90aW1lPTE2ODYzMTc3MDMmbm9uY2U9NDA4Nzg2JnJvbGU9UFVCTElTSEVSJmV4cGlyZV90aW1lPTE2ODY5MjI1MDM=';

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
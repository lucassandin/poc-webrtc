import React, { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext";

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

import video from "../../Assets/video.png";
import microfone from "../../Assets/microfone.png";
import encerrar from "../../Assets/encerrar-chamada.png";
import * as S from "./styles";

export default function ChamadaDeVideo() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  }) 
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  // const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = '47721481';
  const sessionId = '1_MX40NzcyMTQ4MX5-MTY4NjU3MjUxNDMzN35LMEVyYzhHMnpLbWgramJJbS9TVmdEZE5-UH5-';
  const token = 'T1==cGFydG5lcl9pZD00NzcyMTQ4MSZzaWc9YmY1YmFhODIxZDVjZGIxMTI1NTkxMDMxOTA5NDFmMmQyNzVkZWY2MzpzZXNzaW9uX2lkPTFfTVg0ME56Y3lNVFE0TVg1LU1UWTROalUzTWpVeE5ETXpOMzVMTUVWeVl6aEhNbnBMYldncmFtSkpiUzlUVm1kRVpFNS1VSDUtJmNyZWF0ZV90aW1lPTE2ODY1NzYzODMmbm9uY2U9MC42MDAzOTU4OTA0NTM5ODM0JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2ODY1OTc5ODImaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

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
    // screenshare.current.session = session;
    // screenshare.current.token = token;
  });

  return (
    <S.Content>
        <video-publisher 
          // width="300px" 
          height="240px" 
          ref={publisher}
        ></video-publisher>

        <video-subscribers 
          // width="300px" 
          height="240px" 
          ref={subscribers}
        ></video-subscribers>
        {/* <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share> */}

        <S.ButtonGroup>
          <S.ButtonMedia onClick={toggleAudio}><img src={microfone} alt="Microfone" /></S.ButtonMedia>
          <S.ButtonMedia onClick={() => navigate("/")}><img src={encerrar} alt="Encerrar" /></S.ButtonMedia>
          <S.ButtonMedia onClick={toggleVideo}><img src={video} alt="Vídeo" /></S.ButtonMedia>
        </S.ButtonGroup>
    </S.Content>
  );
}

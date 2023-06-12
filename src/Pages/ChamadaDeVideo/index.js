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
import './style.css';

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
  const apiKey = process.env.REACT_APP_API_KEY;
  const sessionId = process.env.REACT_APP_SESSION_ID;
  const token = process.env.REACT_APP_TOKEN;

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
      <S.VideoGroup>
        <S.VideoContent>
          <video-publisher 
            // width="300px" 
            // height="240px" 
            ref={publisher}
          >
          </video-publisher>

          {/* <S.Tipo>
            <div>Você</div>
          </S.Tipo> */}
        </S.VideoContent>

        <S.VideoContent>
          <video-subscribers 
            // width="300px" 
            // height="240px" 
            ref={subscribers}
          ></video-subscribers>

          {/* <S.Tipo>
            <div>Operador</div>
          </S.Tipo> */}
        </S.VideoContent>
      </S.VideoGroup>

      {/* <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share> */}

      <S.ButtonGroup>
        <S.ButtonMedia onClick={toggleAudio}><img src={microfone} alt="Microfone" /></S.ButtonMedia>
        <S.ButtonMedia onClick={() => navigate("/")}><img src={encerrar} alt="Encerrar" /></S.ButtonMedia>
        <S.ButtonMedia onClick={toggleVideo}><img src={video} alt="Vídeo" /></S.ButtonMedia>
      </S.ButtonGroup>
  </S.Content>
  );
}

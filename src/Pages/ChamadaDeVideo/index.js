import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useNavigateContext } from "../../Context/NavigateContext";

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

import video from "../../Assets/icons/can.svg";
import videoMute from "../../Assets/icons/can-mut.svg";
import microfone from "../../Assets/icons/dic.svg";
import microfoneMute from "../../Assets/icons/mic-mut.svg";
import encerrar from "../../Assets/icons/desligar.svg";

import FooterVideo from "../../Components/FooterVideo";
import Content from "../../Components/Content";


import * as S from '../../Components/styles/styles';
import * as SS from "./styles";
import './style.css';

export default function ChamadaDeVideo() {
  const navigate = useNavigate();
  const { setHeaderBack, setIsOverlay, setBackgroundColor } = useNavigateContext();

  const [micButton, setMicButton] = useState(false);
  const [videoButton, setVideoButton] = useState(false);

  useEffect(() => {
    setHeaderBack(true)
    setIsOverlay("true")
    setBackgroundColor("false");

    return () => {
      setIsOverlay("false")
    }
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
    setVideoButton(!videoButton)
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
    setMicButton(!micButton)
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

    session.connect(token);

    return () => {
      session.disconnect();
    }
  });

  return (
    //     {/* <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share> */}
    <>
      {/* central content */}
      <Content>
        <S.Row>
          <video-subscribers
            ref={subscribers}
          ></video-subscribers>
        </S.Row>
      </Content>

      {/* footer content */}
      <FooterVideo>
        <S.Row>
          <video-publisher
            ref={publisher}
          >
          </video-publisher>
        </S.Row>
        <S.Row>
          <S.Column>
            <SS.ButtonGroup>
              <SS.ButtonMedia onClick={toggleAudio}>
                {micButton ? (<img src={microfoneMute} alt="Microfone" />) : (<img src={microfone} alt="Microfone" />)}
              </SS.ButtonMedia>
              <div style={{
                display: 'flex',
                gap: '10vw',
              }}>
              <SS.ButtonMedia onClick={toggleVideo}>
                {videoButton ? (<img src={videoMute} alt="Vídeo" />) : (<img src={video} alt="Vídeo" />)}
              </SS.ButtonMedia>
                <SS.ButtonMedia onClick={() => navigate("/atendimento/assinatura")}><img src={encerrar} alt="Encerrar" /></SS.ButtonMedia>
              </div>
            </SS.ButtonGroup>
          </S.Column>
        </S.Row>
      </FooterVideo>
    </>
  );
}

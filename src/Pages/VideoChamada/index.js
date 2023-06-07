import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import './index.css';
import * as S from './styles';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';
import { useNavigateContext } from '../../Context/NavigateContext';
import { useUserContext } from '../../Context/UserContext';

export default function VideoChamada() {
  const { setHeaderBack } = useNavigateContext();
  const { 
    handleGetUserSession, 
  } = useUserContext();

  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);
  const apiKey = '47721481';
  const { sessionid } = useParams();

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  // eslint-disable-next-line
  const handleT = () => {
    try {
      api.get(`/session/create/publisher`)
        .then(res => {
          if (res.data) {
          }
        })
    } catch (error) {
      console.log("erro :: ", error)
    }
  }

  useEffect(() => {
    setHeaderBack(true)
  })
 
  useEffect(() => {
    try {
      const OT = window.OT;
      const session = OT.initSession(apiKey, sessionid);
      publisher.current.session = session;
      publisher.current.token = session.token;
      subscribers.current.session = session; 
      subscribers.current.token = session.token; 
      screenshare.current.session = session; 
      screenshare.current.token = session.token; 
    } catch (error) {
      console.log("erro :: ", error)
    }

    console.log(publisher)
    console.log(subscribers)
    console.log(screenshare)
  }, [handleGetUserSession, sessionid]);

  return (
    <div className="App">
      <S.Container>
        <S.SectionPublisher>
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
        <S.SectionSubscribers>
          <fieldset>
            <legend>Subscribers</legend>
            <video-subscribers width="360px" height="240px" ref={subscribers}></video-subscribers>
          </fieldset>
        </S.SectionSubscribers>
      </S.Container>
    </div>
  );
}

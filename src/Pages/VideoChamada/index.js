import React, { useRef, useEffect } from 'react';
import api from '../../services/api';
import './index.css';
import * as S from './styles';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';
import { useNavigateContext } from '../../Context/NavigateContext';
import { useUserContext } from '../../Context/UserContext';

export default function VideoChamada() {
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);

  const { setHeaderBack } = useNavigateContext();
  const { handleGetUserSession, handleUpdateUserSession } = useUserContext();

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = '47721481';
  // const sessionId = process.env.SESSION_ID;
  // const token = 'T1==cGFydG5lcl9pZD00NzcyMTQ4MSZzaWc9MmZkZTNlYmU3YTJjZDNiYjE1MjJjOWM4ZDQ2NWI0NmM1MmZiZmUwYjpzZXNzaW9uX2lkPTJfTVg0ME56Y3lNVFE0TVg1LU1UWTROakF3TXpFd01EUTNNbjR2WWpkalRqSkhTbUpEVUZaMVFVRTVPRXR2YUVodFdXSi1mbjQmY3JlYXRlX3RpbWU9MTY4NjAwMzEwOSZub25jZT0wLjczNzA2NzExODQ5NTYzODgmcm9sZT1tb2RlcmF0b3ImZXhwaXJlX3RpbWU9MTY4NjAwNjcwOSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  useEffect(() => {
    setHeaderBack(true)
  })
 
  useEffect(() => {
    const usuarioLogado = handleGetUserSession("usuario");
    if (usuarioLogado.type === "operador") {
      try {
        api.get(`/session/create/publisher`)
          .then(res => {
            if (res.data) {
              // atualizar os dados de sessao do usuario
              handleUpdateUserSession("usuario", { ...usuarioLogado, ...res.data })

              const OT = window.OT;
              const session = OT.initSession(apiKey, res.data.Id);
              publisher.current.session = session;
              publisher.current.token = res.data.Token;
            }
          })
      } catch (error) {
        console.log("erro :: ", error)
      }
    }

    if (usuarioLogado.type === "cliente") {
      try {
        api.get(`/session/create/subscriber/${usuarioLogado.Id}`)
          .then(res => {
            if (res.data) {
              // atualizar os dados de sessao do usuario
              handleUpdateUserSession("usuario", { ...usuarioLogado, ...res.data })

              const OT = window.OT;
              const session = OT.initSession(apiKey, usuarioLogado.Id);
              subscribers.current.session = session; 
              subscribers.current.token = res.data.token;
              screenshare.current.session = session; 
              screenshare.current.token = res.data.token;
            }
          })
      } catch (error) {
        console.log("erro :: ", error)
      }
    }
  }, [handleGetUserSession, handleUpdateUserSession]);

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

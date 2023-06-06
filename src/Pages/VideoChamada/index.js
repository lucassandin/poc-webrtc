import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    handleUpdateUserSession,
    publisher,
    subscribers,
    screenshare
  } = useUserContext();

  const apiKey = '47721481';
  const [clipboard, setClipboard] = useState(`https://poc-webrtc.vercel.app/primeiro/acesso/${0}`);

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
              setClipboard(`https://poc-webrtc.vercel.app/primeiro/acesso/${res.data.Id}`)
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
  }, [publisher, handleGetUserSession, handleUpdateUserSession]);

  return (
    <div className="App">
      <S.Container>
        <CopyToClipboard text={clipboard}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>
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

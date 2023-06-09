import React, { useEffect, useState } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import * as S from './styles';

export default function Sessoes() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();
  const [sessions, setSessions] = useState([]);

  const handleGetSessions = () => {
    try {
      api.get(`/getall`)
        .then(res => {
          if (res.data) {
            setSessions(res.data);
          }
        })
    } catch (error) {
      console.log("erro :: ", error)
    }
  }

  const handleCreatePublisherSession = () => {
    try {
      api.post(`/publisher`)
        .then(res => {
          if (res.data) {
            handleGetSessions()
          }
        })
    } catch (error) {
      console.log("erro :: ", error)
    }
  }

  useEffect(() => {
    setHeaderBack(true);
    handleGetSessions();
  }, [setHeaderBack]) 

  return (
    <S.Content>

      <S.ButtonGroup>
        <S.Button onClick={() => {
          handleCreatePublisherSession();
        }} >Criar sessão</S.Button>
      </S.ButtonGroup>

      <S.Title>Sessões</S.Title>
      <S.InputContent>
          {sessions !== [] ?
            sessions.map(s => {
              return (
                <S.InputGroupd key={s.Id}>
                  <CopyToClipboard text={`${process.env.REACT_APP_REACT_APP}/chamada-de-video/${s.Id}/cliente`}>
                    <S.ButtonClipBoard >Copy to clipboard</S.ButtonClipBoard>
                  </CopyToClipboard>

                  <S.Button onClick={() => {
                    localStorage.setItem("publisher-token", s.Token);
                    navigate(`/chamada-de-video/${s.Id}/operador`)
                  }}>Vídeo chamada</S.Button>
                </S.InputGroupd>
              )
            })
            : <></>}
      </S.InputContent>
    </S.Content>
  )
}
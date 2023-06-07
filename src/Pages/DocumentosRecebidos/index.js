import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import documentReceive from "../../Assets/document-receive.svg";

import * as S from './styles';

export default function DocumentosRecebidos() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Location>
        <img src={documentReceive} alt="Documento recebido" />
      </S.Location>
      <S.Title>Documentos recebido!</S.Title>
      <S.Span>Em até 2 horas iremos dar retorno.</S.Span>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/confirmacao-agendamento`)}>OK</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
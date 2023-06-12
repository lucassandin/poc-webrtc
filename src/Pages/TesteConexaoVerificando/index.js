import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import load from "../../Assets/load.svg";

import * as S from './styles';

export default function TesteConexaoVerificando() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Location>
        <img src={load} alt="Load" />
      </S.Location>
      <S.Title>Estamos testando a sua conexão a internet.</S.Title>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/testeconexaook`)}>Continuar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
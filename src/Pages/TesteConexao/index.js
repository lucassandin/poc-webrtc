import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";


import * as S from './styles';

export default function TesteConexao() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Facial validada :)</S.Title>

      <S.Span>Agora iremos verificar a sua conexão com a internet.</S.Span>
      

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/testeconexaoverificando`)}>Estou pronto</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
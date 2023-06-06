import React, { useEffect } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';
import { useUserContext } from "../../Context/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();
  const { handleCreateUserSession } = useUserContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    <S.Content>
      <S.Title>Seja bem vindo</S.Title>

      <S.Span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</S.Span>
      <S.ButtonGroup>
        <S.Button onClick={() => navigate("/video/chamada")}>Primeiro acesso</S.Button>
        <S.Button onClick={() => navigate("/video/chamada")}>Já agendei</S.Button>
      </S.ButtonGroup>

      <S.ButtonGroup>
        <S.Button onClick={() => {
          handleCreateUserSession("usuario", { type: "operador"})
          navigate("/video/chamada")
        }}>Operador</S.Button>
        <S.Button onClick={() => {
          handleCreateUserSession("usuario", { type: "cliente"})
          navigate("/video/chamada")
        }}>Cliente</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
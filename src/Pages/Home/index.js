import React, { useEffect } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function Home() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  }) 

  return (
    <S.Content>
      <S.Title>Login</S.Title>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/video/chamada`)}>Operador</S.Button>
        <S.Button onClick={() => navigate(`/seja-bem-vindo`)}>Cliente</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
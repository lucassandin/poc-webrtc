import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function SejaBemVindo() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    <S.Content>
      <S.Title>Seja bem vindo</S.Title>

      <S.Span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</S.Span>
      <S.ButtonGroup>

        <S.Button onClick={() => navigate(`/agendamento/titular-beneficiario`)}>Primeiro acesso</S.Button>

        {/* direcionar para a tela direta de orientações */}
        <S.Button onClick={() => navigate(`/video/chamada`)}>Já agendei</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
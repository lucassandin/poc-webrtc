import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import * as S from './styles';

export default function TitularBeneficiario() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    <S.Content>
      <S.Title>Antes de iniciamos, gostaríamos de te conhecer. :)</S.Title>

      <S.Span>Você é o titular do benefício?</S.Span>
      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/preencher-dados`)}>Sim</S.Button>
        <S.Button onClick={() => navigate(`/seja-bem-vindo`)}>Não</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
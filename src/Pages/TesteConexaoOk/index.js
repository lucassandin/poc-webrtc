import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";


import * as S from './styles';

export default function Orientacoes() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Conexão com internet ok :)</S.Title>

      <S.Span>Estamos prontos para iniciar o atendimento.</S.Span>


      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/chamada-de-video`)}>Estou Pronto</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
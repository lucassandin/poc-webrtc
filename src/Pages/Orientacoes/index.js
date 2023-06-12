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
      <S.Title> Antes de iniciarmos iremos vamos fazer algumas breves etapas:</S.Title>      

      <S.Span>
        <ol>
          <li>Validação facial.</li>
          <li>Testar a conexão com a internet.</li>
        </ol>
      </S.Span>

      <S.Title2> Se tudo estiver ok, estaremos prontos para iniciar.</S.Title2>

      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/reconhecimento-facial`)}>Continuar</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}
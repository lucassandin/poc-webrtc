import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import warning from "../../Assets/warning.svg";
import * as S from './styles';

export default function RecomendacaoFacial() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <S.Content>
      <S.Title>Agora iremos precisar de fazer o reconhecimento facial.</S.Title>

      <S.Warning>
        <S.Img src={warning} alt="warning" />

        <div>
          Importante
        </div>
      </S.Warning>

      <S.Span>
        <ol>
          <li>Posicione seu rosto dentro da marcação.</li>
          <li>Esteja em um lugar com boa iluminação.</li>
          <li>Caso use óculos, retire por favor!</li>
        </ol>
      </S.Span>
      <S.ButtonGroup>
        <S.Button onClick={() => navigate(`/agendamento/reconhecimento-facial`)}>Estou pronto</S.Button>
      </S.ButtonGroup>
    </S.Content>
  )
}